import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import CountryData from './pages/CountryData';
// import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryData />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
