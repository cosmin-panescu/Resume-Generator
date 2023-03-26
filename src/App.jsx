// React
import React from 'react';
// pages
import AppPage from './pages/appPage/AppPage'
import HomePage from './pages/homePage/HomePage'
// React Router
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/resume' element={<AppPage />} />
      </Routes>
    </div>
  )
}

export default App;
