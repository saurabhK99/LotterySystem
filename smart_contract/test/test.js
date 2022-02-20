const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery System", () => {
  it("Should return the balance of the initial contract", async () => {
    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy();
    await lottery.deployed();

    expect(await lottery.balanceOf()).to.equal(0);

    // const setGreetingTx = await lottery.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await lottery.greet()).to.equal("Hola, mundo!");
  });
});
