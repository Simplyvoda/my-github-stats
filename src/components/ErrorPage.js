import React from 'react'
import { Link } from 'react-router-dom';

const backgroundStyle = { backgroundColor: 'white' }

export const ErrorPage = () => {
    return (
        <div style={backgroundStyle} className='error-page flex justify-center items-center flex-col h-screen space-y-2'>
            <h2 className='text-4xl font-bold'>404 Error</h2>
            <p >page not found</p>
            <Link to='/' className='home-link text-red-600'>Click here to go back home</Link>
        </div>
    )
}

export default ErrorPage