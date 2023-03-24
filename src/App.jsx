import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage'
import AppPage from './pages/appPage/AppPage'

function App() {

  return (
    <div className='app'>
      <AppPage />
    </div>
  )
}

export default App;
