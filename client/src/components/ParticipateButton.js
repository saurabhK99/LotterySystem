import React from 'react'

const ParticipateButton = ({ participate }) => {
    return (
        <button
            className='large-btn text-white bg-vibrant'
            onClick={() => participate()}
        >
            Participate
        </button>
    )
}

export default ParticipateButton
