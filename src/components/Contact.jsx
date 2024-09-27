import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      {loggedIn ? (
        <div>
          <h3>Welcome back!</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Please Sign In</h3>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default Contact;