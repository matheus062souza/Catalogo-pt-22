import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // App.jsx está em src/
import { ThemeProvider } from './context/ThemeContext.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Encontra o componente aqui  */}
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);