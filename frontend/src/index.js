import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import global styles (if any)
import App from './App';  // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom';  // For routing

// Render the App component inside the root div element in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />  {/* Wrap App with Router to enable routing */}
  </Router>
);
