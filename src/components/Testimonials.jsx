import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px auto', maxWidth: '1200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
        <h2 style={{ color: '#1e90ff' }}>Testimonials</h2>
        <div style={{ marginTop: '20px' }}>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "A.P Tech Hub has transformed my tech shopping experience! Their customer service is exceptional, and I found the perfect laptop for my needs."
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— Sarah Johnson, Graphic Designer</footer>
          </blockquote>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "I was blown away by the quality and selection of products at A.P Tech Hub. Highly recommend to anyone looking for reliable tech products!"
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— Mark Thompson, Software Engineer</footer>
          </blockquote>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "The team at A.P Tech Hub really knows their stuff. They helped me choose the right accessories for my devices. I'll definitely be back!"
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— Jessica Lee, Business Owner</footer>
          </blockquote>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "Fast shipping and excellent customer support. I couldn't be happier with my purchase from A.P Tech Hub!"
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— David Smith, IT Consultant</footer>
          </blockquote>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "A great selection of the latest tech gadgets. A.P Tech Hub is now my go-to for all things tech!"
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— Emma Williams, Digital Marketer</footer>
          </blockquote>
          <blockquote style={{ fontStyle: 'italic', color: '#555', margin: '10px 0' }}>
            "I love the user-friendly website and how easy it is to find what I need. Highly recommend!"
            <footer style={{ marginTop: '10px', fontWeight: 'bold', color: '#1e90ff' }}>— John Brown, Entrepreneur</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
