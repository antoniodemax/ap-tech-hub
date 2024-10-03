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
    backgroundColor: 'white',
    color: '#007BFF',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer', 
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    padding: '0.5rem',
    transition: 'border-bottom 0.3s ease',
  };

  const activeLinkStyle = {
    borderBottom: '2px solid #007BFF',
  };

  const cartIconStyle = {
    position: 'relative',
  };

  const cartCountStyle = {
    position: 'absolute',
    top: '-5px',
    right: '-10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '0.1rem 0.3rem',
    color: 'white',
    fontSize: '0.75rem',
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={titleStyle}>
        A.P Tech Hub
      </Link>
      <nav>
        <ul style={navListStyle}>
          <li>
            <Link to="/" style={{ ...linkStyle, ...(location.pathname === '/' ? activeLinkStyle : {}) }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ ...linkStyle, ...(location.pathname === '/about' ? activeLinkStyle : {}) }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ ...linkStyle, ...(location.pathname === '/products' ? activeLinkStyle : {}) }}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/testimonials" style={{ ...linkStyle, ...(location.pathname === '/testimonials' ? activeLinkStyle : {}) }}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ ...linkStyle, ...(location.pathname === '/contact' ? activeLinkStyle : {}) }}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" style={linkStyle}>
              <div style={cartIconStyle}>
                <FaShoppingCart />
                {cart.length > 0 && <span style={cartCountStyle}>{cart.length}</span>}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
