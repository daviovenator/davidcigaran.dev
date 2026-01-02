import React from 'react';
import ReactDOM from 'react-dom/client';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
