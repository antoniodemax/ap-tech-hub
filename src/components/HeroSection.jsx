import React from 'react';

const HeroSection = () => {
    const handleGetStarted = () => {
        const productsSection = document.getElementById('products');
        productsSection.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to A.P Tech Hub</h1>
        <p>Your one-stop shop for tech products</p>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
