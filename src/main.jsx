import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import AppLayout from './layouts/AppLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppLayout/>
    </Router>
  </React.StrictMode>,
)
