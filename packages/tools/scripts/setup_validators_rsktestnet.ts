import * as ethers from 'ethers'
import { EventFragment } from '@ethersproject/abi'
import { L1Bridge, RollupCreator__factory, Inbox__factory } from 'arb-ts'
import * as yargs from 'yargs'
import * as fs from 'fs-extra'
import { setupValidatorStates } from './setup_validators'

import * as addresses from '../../arb-bridge-eth/bridge_eth_addresses.json'
import { execSync } from 'child_process'

const networkUrl = "http://3.141.186.36:4444";
const provider = new ethers.providers.JsonRpcProvider(networkUrl)

import PrivateKey from '../../../priv.json';
const wallet = new ethers.Wallet(PrivateKey, provider);
const root = '../../'
const rollupsPath = root + 'rollups/'

export interface RollupCreatedEvent {
  rollupAddress: string
  inboxAddress: string
}

async function setupRollup(
  sequencerAddress: string
): Promise<RollupCreatedEvent> {
  // TODO: is the L2 sequencer the 1st unlocked account in the L1 node?
  console.log("setup rollup")
  const network = 'rsktestnet'
  
  execSync(
    `yarn workspace arb-bridge-eth hardhat create-chain --sequencer ${sequencerAddress} --network ${network}`
  )
 
  const fileName = `rollup-${network}.json`
  const file = fs.readFileSync(`../arb-bridge-eth/${fileName}`).toString()
  const ev = JSON.parse(file)

  return {
    rollupAddress: ev.rollupAddress,
    inboxAddress: ev.inboxAddress,
  }
}

async function initializeWallets(count: number): Promise<ethers.Wallet[]> {
  console.log("init wallets for "+count)
  const wallets: ethers.Wallet[] = []
  const waits = []
  for (let i = 0; i < count; i++) {
    const newWallet = ethers.Wallet.createRandom()
    const tx = {
      to: newWallet.address,
      value: ethers.utils.parseEther('0.08'),
    }
    const send = await wallet.sendTransaction(tx)
    wallets.push(newWallet)
    waits.push(send.wait())
  }
  await Promise.all(waits)
  return wallets
}

async function initializeClientWallets(inboxAddress: string): Promise<void> {
  console.log("init client wallets")
  const addresses = [
"0x11e6A5F9a7aFC3c614d67260fD663BDF2AaE6EaA".toLowerCase(),
"0xf2BeD2ebd2E6ee52Bb883d39E25B0AD4A7a02E8D".toLowerCase() //deployer of peripherals, needs at least 0.08
  ]

  const inbox = Inbox__factory.connect(inboxAddress, wallet)
  const amount = ethers.utils.parseEther('0.2')

  for (const address of addresses) {
    await inbox.depositEth(address, { value: amount })
  }
}

async function setupValidators(
  count: number,
  blocktime: number,
  force: boolean
): Promise<void> {
  console.log("setup validators");
  const wallets = await initializeWallets(count)

  const { rollupAddress, inboxAddress } = await setupRollup(
    await wallets[0].getAddress()
  )
  console.log('Created rollup', rollupAddress)

  const validatorsPath = rollupsPath + 'local/'

  if (count < 2) {
    throw Error('must create at least 1 validator')
  }

  if (!fs.existsSync(rollupsPath)) {
    fs.mkdirSync(rollupsPath)
  }

  if (fs.existsSync(validatorsPath)) {
    if (force) {
      fs.removeSync(validatorsPath)
    } else {
      throw Error(
        `${validatorsPath} already exists. First manually delete it or run with --force`
      )
    }
  }

  const config = {
    rollup_address: rollupAddress,
    inbox_address: inboxAddress,
    validator_utils_address: addresses['contracts']['ValidatorUtils'].address,
    validator_wallet_factory_address:
      addresses['contracts']['ValidatorWalletCreator'].address,
    eth_url: networkUrl,
    password: 'pass',
    blocktime: blocktime,
  }

  await setupValidatorStates(count, 'local', config)

  let i = 0
  for (const wallet of wallets) {
    const valPath = validatorsPath + 'validator' + i + '/'
    const walletPath = valPath + 'wallets/'
    fs.mkdirSync(walletPath)
    const encryptedWallet = await wallet.encrypt('pass')
    fs.writeFileSync(walletPath + wallet.address, encryptedWallet)
    i++
  }

  await initializeClientWallets(inboxAddress)
}

if (require.main === module) {
  yargs.command(
    'init [rollup] [ethurl]',
    'initialize validators for the given rollup chain',
    yargsBuilder =>
      yargsBuilder.options({
        force: {
          description: 'clear any existing state',
          type: 'boolean',
          default: false,
        },
        validatorcount: {
          description: 'number of validators to deploy',
          default: 1,
        },
        blocktime: {
          description: 'expected length of time between blocks',
          default: 2,
        },
      }),
    args => {
      setupValidators(args.validatorcount + 1, args.blocktime, args.force)
    }
  ).argv
}