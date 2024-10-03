import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerTextStyle = {
    color: '#fff',
    margin: '10px 0',
    textAlign: 'center',
    fontSize: '0.9em',
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    margin: '0 10px',
    transition: 'color 0.3s',
  };

  return (
    <footer style={{ backgroundColor: 'black', padding: '40px 20px', marginTop: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ color: '#1e90ff', textAlign: 'center', marginBottom: '20px' }}>A.P Tech Hub</h2>
        <p style={footerTextStyle}>Your trusted source for tech products and solutions.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ margin: '10px 0', flex: '1 1 200px' }}>
            <h3 style={footerTextStyle}>Products</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>Laptops</li>
              <li>Phones</li>
              <li>Cables</li>
            </ul>
          </div>
          <div style={{ margin: '10px 0', flex: '1 1 200px' }}>
            <h3 style={footerTextStyle}>Resources</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>Themes</li>
              <li>Templates</li>
              <li>Snippets</li>
            </ul>
          </div>
          <div style={{ margin: '10px 0', flex: '1 1 200px' }}>
            <h3 style={footerTextStyle}>Company</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={footerTextStyle}>Get exclusive assets sent straight to your inbox.</p>
          
          
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h3 style={footerTextStyle}>Follow Us</h3>
          <div>
            <a href="https://github.com/antoniodemax" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8em' }}>
          <p style={footerTextStyle}>Copyright © 2010-2024 A.P Tech Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
