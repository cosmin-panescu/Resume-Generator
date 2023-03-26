// React
import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.scss';
// components
import App from './App';
// React Router 
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
