import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px auto', maxWidth: '1200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1e90ff' }}>Contact Us</h2>
        <button style={{ margin: '10px', backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px' }}>Sign In</button>
        <button style={{ margin: '10px', backgroundColor: '#1e90ff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px' }}>Logout</button>
      </div>
    </section>
  );
};

export default Contact;
