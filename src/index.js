import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import DateCounter from './components/DateCounter';
// import BankApp from './components/BankApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <DateCounter /> */}
{/* <BankApp /> */}
  </React.StrictMode>
);
