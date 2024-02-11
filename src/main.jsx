

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App.jsx';
import './index.css';
// import './globalStyles/myGlobalStyles.css';

createRoot(document.getElementById('root')).render( // Use createRoot from react-dom/client
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
