import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" style={{ textAlign: 'center', padding: '100px 20px', backgroundColor: '#1e90ff', color: 'white' }}>
      <h1>Welcome to A.P Tech Hub</h1>
      <p>Your one-stop shop for tech products</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#fff', color: '#1e90ff', border: 'none', borderRadius: '5px', fontSize: '1.2em' }}>
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
