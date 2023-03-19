import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddAd from './pages/AddAd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddAd" element={<AddAd />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
