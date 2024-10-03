import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cart = [] }) => {
  const location = useLocation(); 

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'black', 
    color: 'white', 
    borderRadius: '0', 
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem', 
    position: 'relative', 
    transition: 'color 0.3s ease', 
  };

  const activeLinkStyle = {
    color: 'white', 
  };

  const underlineStyle = {
    content: '""',
    position: 'absolute',
    bottom: '-5px', 
    left: '50%',
    width: '100%',
    height: '2px', 
    backgroundColor: 'green', 
    transform: 'translateX(-50%) scaleX(0)', 
    transition: 'transform 0.3s ease',
    zIndex: -1, 
  };

  return (
    <header style={headerStyle}>
      <div style={titleStyle}>A.P Tech Hub</div>
      <nav>
        <ul style={navListStyle}>
          {['/', '/about', '/products', '/testimonials', '/contact'].map((path, index) => (
            <li key={index} style={{ position: 'relative' }}>
              <Link
                to={path}
                style={linkStyle}
                onMouseEnter={(e) => {
                  const line = e.target.querySelector('.underline');
                  if (line) {
                    line.style.transform = 'translateX(-50%) scaleX(1)';
                  }
                }}
                onMouseLeave={(e) => {
                  const line = e.target.querySelector('.underline');
                  if (line && location.pathname !== path) {
                    line.style.transform = 'translateX(-50%) scaleX(0)';
                  }
                }}
                onClick={(e) => {
                  const lines = document.querySelectorAll('.underline');
                  lines.forEach(line => line.style.transform = 'translateX(-50%) scaleX(0)');
                  const line = e.target.querySelector('.underline');
                  if (line) {
                    line.style.transform = 'translateX(-50%) scaleX(1)';
                  }
                }}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                <span className="underline" style={underlineStyle}></span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" style={linkStyle}>
              <div style={{ position: 'relative' }}>
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    padding: '0.1rem 0.3rem',
                    color: 'white',
                    fontSize: '0.75rem',
                  }}>
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
