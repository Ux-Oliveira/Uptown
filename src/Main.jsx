import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import FeaturePage from './FeaturePage.jsx';
import './index.css'; // Ensures global CSS and Tailwind utilities are applied

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/FeaturePage" element={<FeaturePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
