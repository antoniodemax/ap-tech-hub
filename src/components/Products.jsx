import { useState, useEffect } from 'react';
import productsData from '../db.json';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const addToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="products">
      <h2>Our Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default Products;