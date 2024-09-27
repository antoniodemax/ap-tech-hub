import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}>A.P Tech Hub</div>
      <nav>
        <ul style={navListStyle}>
          <li style={linkStyle}><Link to="hero" smooth={true} duration={500} style={linkTextStyle}>Home</Link></li>
          <li style={linkStyle}><Link to="about" smooth={true} duration={500} style={linkTextStyle}>About</Link></li>
          <li style={linkStyle}><Link to="products" smooth={true} duration={500} style={linkTextStyle}>Products</Link></li>
          <li style={linkStyle}><Link to="testimonials" smooth={true} duration={500} style={linkTextStyle}>Testimonials</Link></li>
          <li style={linkStyle}><Link to="contact" smooth={true} duration={500} style={linkTextStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Header styles
const headerStyle = {
  backgroundColor: '#1e90ff',
  padding: '10px',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '10',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// Title styles
const titleStyle = {
  marginLeft: '20px',
  fontSize: '1.5em',
  color: 'white',
  fontWeight: 'bold',
};

// Navigation list styles
const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

// Link styles
const linkStyle = {
  margin: '0 10px', 
  padding: '6px 10px', 
  backgroundColor: '#fff',
  borderRadius: '19px',
  cursor: 'pointer', 
  transition: 'background-color 0.3s ease, transform 0.3s ease', 
};

const linkTextStyle = {
  color: '#1e90ff',
  textTransform: 'lowercase',
  fontSize: '1em',
  textDecoration: 'none', 
};

const hoverStyle = {
  '&:hover': {
    backgroundColor: 'black', 
    transform: 'translateY(-2px)', 
  },
};

export default Header;
