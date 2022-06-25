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
                <img src='github-ico.png' alt='github' />
            </section>

            <section>
                <strong>FRONTEND</strong>
                <img src='react-ico.png' alt='react' />
            </section>

            <section>
                <strong>SMART CONTRACT</strong>
                <img src='ethereum-ico.png' alt='ethereum' />
                <img src='solidity-ico.png' alt='solidity' />
                <img src='hardhat-ico.png' alt='hardhat' />
                <img src='metamask-ico.png' alt='metamask' />
                <img src='ethers-ico.png' alt='ethers' />
            </section>
        </div>
    )
}

export default AboutScreen
