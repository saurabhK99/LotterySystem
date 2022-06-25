const { writeFileSync } = require('fs')
const { ethers } = require('hardhat')

const main = async () => {
    const Lottery = await ethers.getContractFactory('Lottery')
    const lottery = await Lottery.deploy()

    await lottery.deployed()

    console.log('Lottery deployed to:', lottery.address)

    const data = {
        address: lottery.address,
        abi: JSON.parse(lottery.interface.format('json'))
    }

    writeFileSync('../client/src/utils/Lottery.json', JSON.stringify(data))
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

runMain()
