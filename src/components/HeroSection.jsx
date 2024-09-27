import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" style={{ 
      textAlign: 'center', 
      padding: '150px 20px 100px 20px', 
      backgroundColor: '#1e90ff', 
      color: 'white', 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <h1>Welcome to A.P Tech Hub</h1>
      <p>Your one-stop shop for tech products</p>
      <button style={{ 
        padding: '15px 30px', 
        backgroundColor: '#fff', 
        color: '#1e90ff', 
        border: 'none', 
        borderRadius: '5px', 
        fontSize: '1.2em', 
        marginTop: '20px', 
        cursor: 'pointer' 
      }}>
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
