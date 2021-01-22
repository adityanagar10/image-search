import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App'
var PORT = process.env.PORT || 8080;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

