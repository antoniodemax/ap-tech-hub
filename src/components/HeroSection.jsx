import React from 'react';

const HeroSection = () => {
  const handleGetStarted = () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content rotate-in">
        <h1 className="hero-heading">Welcome to A.P Tech Hub</h1>
        <p className="hero-paragraph">Your one-stop shop for tech products</p>
        <button className="hero-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;