import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css";
import reportWebVitals from './reportWebVitals';
import { UserContext } from './components/Context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);


reportWebVitals();
