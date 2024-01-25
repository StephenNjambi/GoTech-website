import React from 'react';
import{Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './components/Pages/AboutPage.jsx';
import ServicesPage from './components/Pages/ServicesPage.jsx'
import ContactsPage from './components/Pages/ContactsPage.jsx';

function App() {
  return (
    <>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<AboutPage />}></Route>
        <Route path='/ServicesPage' element={< ServicesPage />}></Route>
        <Route path='/Contact' element={< ContactsPage />}></Route>
      </Routes>
      < Footer /> 
    </>
  );
}

export default App;
