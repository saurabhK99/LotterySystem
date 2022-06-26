require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY

module.exports = {
    solidity: '0.8.8',
    defaultNetwork: 'hardhat',
    networks: {
        localhost: {
            url: LOCALHOST_RPC_URL,
            chainId: 31337,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            chainId: 4,
            accounts: [RINKEBY_PRIVATE_KEY]
        },
    },
}
