import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'
// import connectWallet from '../utils/connectWallet'

const Header = () => {
    return (
        <header className='navigationContainer'>
            <ul className='navigator line-indicators'>
                <li>
                    <Link className='navigatorLink' to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='navigatorLink' to='/about'>
                        About Us
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
