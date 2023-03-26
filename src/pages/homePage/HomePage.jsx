// React
import React from 'react'
import Header from '../../components/header/Header'
import Testimonials from '../../components/testimonials/Testimonials'
// CSS
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Testimonials />
    </div>
  )
}

export default HomePage