import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { updateTemplateSpan } from 'typescript'

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts, ethers } = hre
  const { deploy } = deployments
  const [deployer] = await ethers.getSigners()
  const deployerAdr = await deployer.getAddress()

  const dep = await deploy('BridgeCreator', {
    from: deployerAdr,
    args: [],
  })

  const delayedBridgeTemplate = await deploy('Bridge', {
    from: deployerAdr,
    args: [],
  })

  
  const sequencerInboxTemplate= await deploy('SequencerInbox', {
    from: deployerAdr,
    args: [],
  })
  
  const inboxTemplate = await deploy('Inbox', {
    from: deployerAdr,
    args: [],
  })

  const rollupEventBridgeTemplate = await deploy('RollupEventBridge', {
    from: deployerAdr,
    args: [],
  })

  const outboxTemplate = await deploy('Outbox', {
    from: deployerAdr,
    args: [],
  })

  
  const BridgeCreator = await ethers.getContractFactory('BridgeCreator')
  const bridgeCreator = await BridgeCreator.attach(dep.address).connect(deployer)

  await bridgeCreator.updateTemplates( 
    delayedBridgeTemplate.address, 
    sequencerInboxTemplate.address,
    inboxTemplate.address,
    rollupEventBridgeTemplate.address, 
    outboxTemplate.address
  )

} 


module.exports = func
module.exports.tags = ['BridgeCreator', 'live']