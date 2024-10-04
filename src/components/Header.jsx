import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'white' }}>
      <h1>A.P Tech Hub</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link className="nav-link" to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link className="nav-link" to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link className="nav-link" to="products" smooth={true} duration={500}>Products</Link></li>
          <li><Link className="nav-link" to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
          <li><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
