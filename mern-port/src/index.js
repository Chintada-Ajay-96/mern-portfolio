import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production console cleanup
if (process.env.NODE_ENV === 'production') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

reportWebVitals();