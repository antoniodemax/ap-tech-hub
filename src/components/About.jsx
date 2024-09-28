import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: '40px 20px',
        margin: '20px auto',
        maxWidth: '1200px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundImage: `url('https://www.pciicp.com/wp-content/uploads/2022/02/Exclusive-Benefits-Of-Working-In-Tech.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        }}
      >
        <h2 style={{ color: '#1e90ff' }}>About Us</h2>
        <p style={{ color: '#333' }}>
          Welcome to A.P Tech Hub, your trusted partner in the world of technology. Founded in 2024 by Anthony Peter .O. Onyango, a passionate tech enthusiast with over a decade of experience in the industry, A.P Tech Hub aims to bridge the gap between cutting-edge technology and our valued customers.
        </p>
        <p style={{ color: '#333' }}>
          At A.P Tech Hub, we believe that technology should be accessible to everyone. Our mission is to provide high-quality tech products, ranging from laptops and smartphones to accessories, all at competitive prices. We carefully curate our selection to ensure that each product meets our strict standards for performance, reliability, and value.
        </p>
        <p style={{ color: '#333' }}>
          What sets us apart is our commitment to customer satisfaction. Our dedicated team is always on hand to provide expert advice and support, ensuring you find the perfect solution to meet your needs. Whether you are a tech novice or an experienced user, we are here to guide you through your journey.
        </p>
        <p style={{ color: '#333' }}>
          Join us at A.P Tech Hub as we explore the latest trends in technology and help you discover the best products to enhance your digital lifestyle. Thank you for choosing us as your go-to tech resource!
        </p>
      </div>
    </section>
  );
};

export default About;
