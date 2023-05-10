// React
import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Header.scss'
// components
import StarsButton from '../startsButton/StartsButton'

const Header = () => {
    return (
        <div className="header">
            {/* floating squares */}
            <div className="square s1"></div>
            <div className="square s2"></div>
            <div className="square s3"></div>
            <div className="square s4"></div>
            <div className="square s5"></div>
            {/* title */}
            <div className="title-container">
                <h1 className='title'>betteresume.</h1>
            </div>
            {/* animation */}
            <div className="typewriter">
                <div className="slide"><i></i></div>
                <div className="paper"></div>
                <div className="keyboard"></div>
            </div>
            {/* subtitle */}
            <p className='description'>Start now and create your perfect ✨resume✨ to achieve your career goals!</p>
            {/* custom button */}
            <Link
                to='/resume'
                className='link'
            >
                <StarsButton title={'Start now'} />
            </Link>
        </div>
    )
}

export default Header