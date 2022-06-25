import React from 'react'

const ErrorScreen = () => {
    return (
        <h1
            style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translate(50%, -50%)',
            }}
        >
            ERROR: 404 Page Not Found!
        </h1>
    )
}

export default ErrorScreen
