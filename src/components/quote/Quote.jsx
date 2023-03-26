// React
import React from 'react'
// CSS
import './Quote.scss'

const Quote = ({ quote }) => {
    return (
        <div className="quote">
            <div className="quote-container">
                <h1>"{quote}"</h1>
            </div>
        </div>
    )
}

export default Quote