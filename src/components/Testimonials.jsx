import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      feedback: 'A.P Tech Hub provided me with excellent service and great products!',
      image: 'https://www.everbridge.com/wp-content/uploads/2023/03/John-Di-Leo_gray-1024x558.jpg.optimal.jpg', 
    },
    {
      name: 'Pasqualine Smith',
      feedback: 'The quality of the tech products is unmatched. Highly recommend!',
      image: 'https://imageio.forbes.com/blogs-images/hayleyleibson/files/2018/06/WOCchat.jpg?height=427&width=640&fit=bounds', 
    },
    {
      name: 'Anthony Johnson',
      feedback: 'Fast shipping and great customer support. I will be back for more!',
      image: 'https://cdn.britannica.com/76/128476-050-BFB7AA50/John-Key-2008.jpg',
    },
  ];

  return (
    <section id="testimonials" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', margin: '20px auto', maxWidth: '1200px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#1e90ff' }}>Testimonials</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} style={{ margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '300px' }}>
            <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', borderRadius: '50%', marginBottom: '10px' }} />
            <p style={{ color: '#333', fontStyle: 'italic' }}>"{testimonial.feedback}"</p>
            <p style={{ color: '#1e90ff', fontWeight: 'bold' }}>{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
