const { expect } = require('chai')
const { ethers } = require('hardhat')

let lottery

beforeEach(async () => {
  const Lottery = await ethers.getContractFactory('Lottery')
  lottery = await Lottery.deploy()
  await lottery.deployed()
})

describe('Lottery System', () => {
    it('Should return the balance of the initial contract', async () => {
        expect(await lottery.balanceOf()).to.equal(0)
    })
})
