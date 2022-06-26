import React, { useEffect, useState } from 'react'

import {
    connect,
    balance,
    participate,
    declare,
    manager,
} from '../utils/connectWallet.js'

import ManagerAction from '../components/ManagerAction.js'
import ParticipateButton from '../components/ParticipateButton.js'
import ConnectButton from '../components/ConnectButton.js'
import './css/homeScreen.css'

const HomeScreen = () => {
    const [address, setAddress] = useState()
    const [contractManager, setManager] = useState()

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.on('accountsChanged', addressHandler)
            window.ethereum.on('WinnerDeclared', (add, amt) => {
                alert('Winner Congrats!')
                localStorage.setItem(winnerAddress, add)
                localStorage.setItem(winningAmount, amt)
            })
            addressHandler()
        }
    }, [])

    const addressHandler = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_accounts',
        })

        if (accounts.length > 0) {
            setAddress(accounts[0])
            manager(setManager)
        }
    }

    return (
        <div className='homeScreenContainer'>
            <div className='descriptionContainer'>
                <img src='logo.png' alt='Lottery Image' />
                <h1>Decentralized Lottery System</h1>
                <p>NOTE: Participation fee is 1 ETH</p>
            </div>

            <div className='buttonContainer'>
                <section>
                    {typeof address === 'undefined' ? (
                        <ConnectButton connect={connect} />
                    ) : (
                        <h2>
                            Connected to{' '}
                            {`${address.slice(0, 4)}...${address.slice(-4)}`}
                        </h2>
                    )}
                </section>

                <section>
                    {typeof address !== 'undefined' &&
                        typeof contractManager !== 'undefined' &&
                        address.toLowerCase() ===
                            contractManager.toLowerCase() && (
                            <ManagerAction
                                balance={balance}
                                declare={declare}
                            />
                        )}
                </section>

                <section>
                    {typeof address !== 'undefined' && (
                        <ParticipateButton participate={participate} />
                    )}
                </section>
            </div>
        </div>
    )
}

export default HomeScreen
