import React, { useState } from 'react';
import Home from './pages/Home';
import CountryData from './pages/CountryData';
import ThemeContext from './themes/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.css';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryData />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
