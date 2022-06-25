import React from 'react'

const ManagerAction = ({ balance, declare }) => {
    return (
        <>
            <button
                className='small-btn text-white bg-vibrant'
                onClick={() => balance()}
            >
                Balance
            </button>
            <button
                className='small-btn text-white bg-vibrant'
                onClick={() => declare()}
            >
                Declare Winner
            </button>
        </>
    )
}

export default ManagerAction
