import React from 'react';

const Footer = () => {
  const footerTextStyle = {
    color: '#fff',
    margin: '10px 0',
    textAlign: 'center',
    fontSize: '0.9em',
  };

  return (
    <footer style={{ backgroundColor: '#1e90ff', padding: '20px 0', marginTop: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ color: '#fff', textAlign: 'center' }}>A.P Tech Hub</h2>
        <p style={footerTextStyle}>Your trusted source for tech products and solutions.</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <div style={{ margin: '10px 0' }}>
            <h3 style={footerTextStyle}>Products</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>Laptops</li>
              <li>Phones</li>
              <li>Cables</li>
            </ul>
          </div>
          <div style={{ margin: '10px 0' }}>
            <h3 style={footerTextStyle}>Resources</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>Themes</li>
              <li>Templates</li>
              <li>Snippets</li>
            </ul>
          </div>
          <div style={{ margin: '10px 0' }}>
            <h3 style={footerTextStyle}>Company</h3>
            <ul style={{ padding: '0', listStyle: 'none', color: '#fff' }}>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
