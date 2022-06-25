# Decentralized Lottery System
---
## [Website](https://lotterysys-dapp.netlify.app/)
## Description
This Lottery system is a decentralized application developed using hardhat, ethers.js and react(frontend).

### Technology
- [React](https://reactjs.org/)
- [Hardhat](https://hardhat.org)
- [Ethers.js](https://docs.ethers.io/v5/)
---
## Usage
- Install metamask extension in your web browser [METAMASK](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn).
- Run the local blockchain from **smart_contract** folder
    ```bash
        npx hardhat node
    ```
- Deploy the smart contract **Lottery.sol** from **smart_contract** folder
    ```bash
        npx hardhat run scripts/deploy.js --network localhost
    ```
- Start the frontend from **client** folder
    ```bash
        npm start
    ```
---
## License
Licensed under [MIT License](license).