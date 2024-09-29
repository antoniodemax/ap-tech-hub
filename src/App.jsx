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
import LoginForm from './components/LoginForm'; // Importing LoginForm component

const App = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <LoginForm /> {/* Adding the LoginForm under the Contact section */}
      <Footer />
    </Router>
  );
};

export default App;
