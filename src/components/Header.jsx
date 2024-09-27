import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#1e90ff', padding: '10px', position: 'fixed', top: '0', width: '100%', zIndex: '10', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ marginLeft: '20px', fontSize: '1.5em', color: 'white', fontWeight: 'bold' }}>
        A.P Tech Hub
      </div>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', color: 'white', listStyle: 'none' }}>
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
