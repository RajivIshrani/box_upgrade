require("@nomicfoundation/hardhat-toolbox")
require("solidity-coverage")
require("@openzeppelin/hardhat-upgrades")
require("dotenv").config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const BNB_API_KEY = process.env.BNB_API_KEY
const BNB_RPC_URL = process.env.BNB_RPC_URL

module.exports = {
    solidity: "0.8.4",
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },

        mumbai: {
            url: MUMBAI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 80001,
            blockConfirmations: 6,
        },

        bsc: {
            url: BNB_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 56,
            blockConfirmations: 6,
        },
    },
    etherscan: {
        // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
        apiKey: {
            goerli: ETHERSCAN_API_KEY,
            polygonMumbai: POLYGONSCAN_API_KEY,
            bsc: BNB_API_KEY,
        },
    },
    mocha: {
        timeout: 500000, // 500 seconds max for running tests
    },
}
