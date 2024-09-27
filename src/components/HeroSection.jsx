import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px auto', maxWidth: '1200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#fff', borderRadius: '10px' }}>
        <h1 style={{ color: '#1e90ff' }}>Welcome to A.P Tech Hub</h1>
        <p style={{ color: '#333' }}>Your one-stop shop for tech products</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1.2em' }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
