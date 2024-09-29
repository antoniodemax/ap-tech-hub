import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <About />
      <Products />
      <Testimonials />
      <Contact /> 
      <Footer />
    </Router>
  );
};

export default App;
