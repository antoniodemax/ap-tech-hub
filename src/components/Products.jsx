import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Laptop', description: 'High-performance laptop', image: 'https://cdn.arstechnica.net/wp-content/uploads/2023/01/2022-MacBook-Pro-closed-scaled.jpeg' },
    { id: 2, name: 'Phone', description: 'Latest smartphone', image: 'https://phonesstorekenya.com/wp-content/uploads/2023/07/Redmi-13-a.jpg' },
    { id: 3, name: 'Cable', description: 'Durable charging cable', image: 'https://www.hubtech.co.ke/wp-content/uploads/images-9-Copy.jpg' },
    { id: 4, name: 'Laptop', description: 'High-performance laptop', image: 'https://s.yimg.com/ny/api/res/1.2/H22.SxBxOh1OFJQT8wzqgQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-04/aeca6eb0-f2a2-11ee-bdef-658f86b42c6d' },
    { id: 5, name: 'Phone', description: 'Latest smartphone', image: 'https://helios-i.mashable.com/imagery/reviews/05b68fuxakHZTuCxVIQVNlO/hero-image.fill.size_1200x1200.v1623373616.jpg' },
    { id: 6, name: 'Cable', description: 'Durable charging cable', image: 'https://www.cmwltd.co.uk/images/product/l/FOS2012MLTPE-MD-250UM-G657A1-1.png?t=1680743098' },
    { id: 7, name: 'Laptop', description: 'High-performance laptop', image: 'https://mombasacomputers.b-cdn.net/wp-content/uploads/2024/03/Dell-Latitude-5520-Business-Laptop-Intel-Core-i7-11th-Gen-16GB-RAM-512GB-SSD-15.6-Inch-FHD-Display-8.jpg' },
    { id: 8, name: 'Phone', description: 'Latest smartphone', image: 'https://phonesstorekenya.com/wp-content/uploads/2022/06/Samsung-Galaxy-A24-b.jpg' },
    { id: 9, name: 'Cable', description: 'Durable charging cable', image: 'https://canlink.co.zw/wp-content/uploads/2023/10/fiber-optic-cable-500x500-1.webp' },
    { id: 10, name: 'Laptop', description: 'High-performance laptop', image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/new/laptops-new/matebook-x-series/matebook-x-pro-ultra-premium-edition-card-1.jpg' },
    { id: 11, name: 'Phone', description: 'Latest smartphone', image: 'https://cdn.prod.website-files.com/60efd1ce3ab711f07b596e2e/6361335451017e2a364becd6_blog-img.jpeg' },
    { id: 12, name: 'Cable', description: 'Durable charging cable', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzHiziPEKDZZPfjLo_mEYbLX_4oPt_giCpQ&s' },
    
  ];

  return (
    <section id="products" className="products">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
