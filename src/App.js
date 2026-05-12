import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import './App.css';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './components/Pages/AboutPage.jsx';
import ServicesPage from './components/Pages/ServicesPage.jsx';
import ContactsPage from './components/Pages/ContactsPage.jsx';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      <Navbar forceSolid={!isHome} />
      {!isHome && <div className="h-16 sm:h-20" aria-hidden="true" />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/ServicesPage" element={<ServicesPage />} />
          <Route path="/Contact" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
