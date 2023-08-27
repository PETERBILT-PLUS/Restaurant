import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './siteComponents/App';
import './styles/App.css';
import "./styles/AppResponsive.css";
import "./styles/ServicesResponsive.css";
import "./styles/AboutResponsive.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
