import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/fonts/InterWeb/inter.css';
import './vendor/normalize.css';
import './index.sass';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
