// React
import React from 'react'
import About from '../../components/about/About'
import Header from '../../components/header/Header'
import Quote from '../../components/quote/Quote'
// CSS
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Quote quote={"Your resume is a key to unlock doors to opportunities."} />
      <About />
    </div>
  )
}

export default HomePage