require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL

module.exports = {
    solidity: '0.8.8',
    defaultNetwork: 'hardhat',
    networks: {
        localhost: {
            url: LOCALHOST_RPC_URL,
            chainId: 31337,
        },
    },
}
