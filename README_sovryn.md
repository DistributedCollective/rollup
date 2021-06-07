# Arbitrum deployment on Rsk

### 1. Prepare the server (Ubuntu 18.04 or 20.04)
1. Install Python3
    - `sudo apt update`
    - `sudo apt install -y curl python3 python3-pip`
2. Install Arbitrum compilers
    - `sudo apt install -y autoconf automake cmake libboost-dev libboost-filesystem-dev libgmp-dev librocksdb-dev libssl-dev libgflags-dev libsnappy-dev zlib1g-dev libbz2-dev liblz4-dev libzstd-dev libtool golang-go clang-format`
    - `pip3 install cmake-format`
    - `sudo add-apt-repository -y ppa:longsleep/golang-backports`
   - `sudo apt update`
    - `git clone -b v6.11.4 https://github.com/facebook/rocksdb`
    - `cd rocksdb`
    - `make shared_lib`
    - `make install`
3. Install Docker
https://docs.docker.com/engine/install/ubuntu/
4. Install Docker compose
https://docs.docker.com/compose/install/
5. Install NodeJs, Yarn and Truffle
NodeJs need to be <= v12
- `touch ~/.bashrc`
- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.3/install.sh | bash`
- `. ~/.bashrc`
- `nvm install 10.16.3`
- `curl -o- -L https://yarnpkg.com/install.sh | bash`
- `. ~/.bashrc`
- `yarn global add truffle`

## 2. Download and install arbitrum

rsk testnet rpc: http://3.141.186.36:4444
deployer: 0xf2bed2ebD2e6EE52Bb883D39E25B0Ad4a7a02E8D

1. Download and install the monorepo
`git clone -b sequencer2 https://github.com/offchainlabs/arbitrum.git`
`cd arbitrum`
`git submodule update --init --recursive`
`yarn`
`yarn build`
`yarn install:validator`

2. Deploy the bridge contracts on Rsk testnet
a. Edit packages/arb-bridge-eth/hardhat.config.ts by adding rskTestnet
`
 rsktestnet: {  
     url: 'http://3.141.186.36:4444',  //experimental rsk node
      accounts: [PrivateKey],  
      network_id: 31,
      confirmations: 3,
      gas: 6800000
    }
`
and the L2 info:
`rskL2: {
      url: 'http://18.217.222.156:8547',
      accounts: [PrivateKey],
      gasPrice: 1000,
      network_id: 123212321,
      gas: 9000000
    }
`
b. Edit packages/arb-bridge-eth/package.json and add
`"deploy:rsktestnet": "hardhat deploy --tags live --network rsktestnet --export bridge_eth_addresses.json",`
c. Add the deployer private key priv.json as String with 0x ("0xcafecafecafe")
d. Run `sudo yarn deploy:rsktestnet`
The output of the deployment is a deployment directory "deployments/rskTestnet" with the deployed contract
addresses and abis.

3. Run the migration (initialize)

dirty quickfix for "permision denied errors": do chmod 777 for the whole package

a.  Edit package.json, add
`"rsktest:initialize": "yarn workspace tools rsktest:initialize",`
b. Run `sudo yarn rsktest:initialize`

The output should be a rollup addres in your terminal and a folder arbitrum/rollups. 


4. Start the validator and aggregator
`sudo yarn demo:deploy`

stop the process after some minutes and run
`sudo docker-compose -f docker-compose.yml up -d & docker-compose logs -f`
to have the process in the background.

Check the logs with
`sudo docker-compose logs -f`


5. Create bridge contracts
Create .env file in packages/arb-bridge-peripherals

DEVNET_PRIVKEY=?
INBOX_ADDRESS=inbox address from validator config

run `sudo yarn rsk:deploy in arb-bridge-peripherals`


---------------------



 