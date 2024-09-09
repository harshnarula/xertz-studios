import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar01 from './components/Navbar01';
import Footer from './components/Footer';
import LandingPage01 from './pages/LandingPage01';
import ArenaPage from './pages/ArenaPage';
import MobileNavbar from './components/MobileNavbar'

function App() {
  return (
    <Router>
      <Navbar01 />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<LandingPage01 />} />
        <Route path="/arena" element={<ArenaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
