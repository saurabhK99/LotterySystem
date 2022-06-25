import React from 'react'

const ConnectButton = ({ connect }) => {
    return (
        <button
            className='large-btn'
            onClick={() => connect()}
        >
            Connect
        </button>
    )
}

export default ConnectButton
