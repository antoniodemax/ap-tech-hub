import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#1e90ff', 
      padding: '15px 20px', 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: '1000', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
    }}>
      <nav>
        <ul style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          color: 'white', 
          listStyle: 'none', 
          fontSize: '1.1em' 
        }}>
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
