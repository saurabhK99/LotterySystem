import React from 'react'
import './css/aboutScreen.css'

const AboutScreen = () => {
    return (
        <div className='aboutContainer'>
            <h2>
                {' '}
                This Lottery system is a decentralized application which is
                deployed on rinkeby testnet.
            </h2>
            <section>
                <strong>SOURCE CODE</strong>
                <a href="https://github.com/saurabhK99/LotterySystem"><img src='github-ico.png' alt='github' /></a>
            </section>

            <section>
                <strong>FRONTEND</strong>
                <a href="https://reactjs.org"><img src='react-ico.png' alt='react' /></a>
            </section>

            <section>
                <strong>SMART CONTRACT</strong>
                <a href="https://ethereum.org/en/"><img src='ethereum-ico.png' alt='ethereum' /></a>
                <a href="https://soliditylang.org"><img src='solidity-ico.png' alt='solidity' /></a>
                <a href="https://hardhat.org"><img src='hardhat-ico.png' alt='hardhat' /></a>
                <a href="https://metamask.io"><img src='metamask-ico.png' alt='metamask' /></a>
                <a href="https://docs.ethers.io/v5/"><img src='ethers-ico.png' alt='ethers' /></a>
            </section>
        </div>
    )
}

export default AboutScreen
