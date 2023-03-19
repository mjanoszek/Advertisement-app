import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AddAd from './pages/AddAd';
import Properties from './pages/Properties';
import PrivateJets from './pages/PrivateJets';
import Cars from './pages/Cars';
import Watches from './pages/Watches';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddAd" element={<AddAd />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/PrivateJets" element={<PrivateJets />} />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/Watches" element={<Watches />} />

      </Routes>
    </Router>
  );
}

export default App;
