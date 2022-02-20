//0x5FbDB2315678afecb367f032d93F642f64180aa3
const { ethers } = require("hardhat");

const main = async () => {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();

  await lottery.deployed();

  console.log("Lottery deployed to:", lottery.address);
}


const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch(err) {
    console.log(err)
    process.exit(1)
  }
}

runMain()
