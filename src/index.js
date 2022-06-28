import React from 'react';
import ReactDOM from 'react-dom';
import FontStyles from './fontStyles';
import style from './reset.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
