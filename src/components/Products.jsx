import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const Products = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { 
      id: 1, 
      name: 'Laptop', 
      description: 'Experience the pinnacle of performance with our high-performance laptop, engineered for creators and innovators. With lightning-fast processing power and stunning graphics, this device is your gateway to a world where imagination meets reality.', 
      image: 'https://cdn.arstechnica.net/wp-content/uploads/2023/01/2022-MacBook-Pro-closed-scaled.jpeg',
      price: 1499.99
    },
    { 
      id: 2, 
      name: 'Phone', 
      description: 'Embrace the future of communication with the latest smartphone, designed to keep you connected in style. Featuring an ultra-responsive display and cutting-edge AI capabilities, this device transforms your everyday interactions into extraordinary experiences.', 
      image: 'https://phonesstorekenya.com/wp-content/uploads/2023/07/Redmi-13-a.jpg',
      price: 799.99
    },
    { 
      id: 3, 
      name: 'Cable', 
      description: 'Elevate your charging game with our durable charging cable, meticulously crafted to withstand the test of time. Enhanced with smart technology, it ensures optimal charging speeds while seamlessly integrating with your tech ecosystem.', 
      image: 'https://www.hubtech.co.ke/wp-content/uploads/images-9-Copy.jpg',
      price: 19.99
    },
    { 
      id: 4, 
      name: 'Laptop', 
      description: 'Unlock your potential with our high-performance laptop, tailored for the modern professional. This sleek machine combines a powerful processor with an elegant design, making it the perfect companion for your digital journey.', 
      image: 'https://s.yimg.com/os/creatr-uploaded-images/2024-04/aeca6eb0-f2a2-11ee-bdef-658f86b42c6d',
      price: 1299.99
    },
    { 
      id: 5, 
      name: 'Cable', 
      description: 'Introducing our durable charging cable, designed for the tech-savvy individual. With reinforced connectors and a flexible design, this cable ensures that your devices remain charged and ready for action, no matter where you go.', 
      image: 'https://www.cmwltd.co.uk/images/product/l/FOS2012MLTPE-MD-250UM-G657A1-1.png?t=1680743098',
      price: 14.99
    },
    { 
      id: 6, 
      name: 'Laptop', 
      description: 'Discover unparalleled efficiency with our high-performance laptop. Equipped with next-gen technology and an innovative cooling system, it’s built to handle the most demanding tasks while keeping you in the flow.', 
      image: 'https://mombasacomputers.b-cdn.net/wp-content/uploads/2024/03/Dell-Latitude-5520-Business-Laptop-Intel-Core-i7-11th-Gen-16GB-RAM-512GB-SSD-15.6-Inch-FHD-Display-8.jpg',
      price: 1399.99
    },
    { 
      id: 7, 
      name: 'Phone', 
      description: 'Elevate your mobile experience with the latest smartphone, engineered for peak performance. Featuring a sleek design and intelligent features, this device is your portal to the connected world.', 
      image: 'https://phonesstorekenya.com/wp-content/uploads/2022/06/Samsung-Galaxy-A24-b.jpg',
      price: 699.99
    },
    { 
      id: 8, 
      name: 'Cable', 
      description: 'Meet the future of connectivity with our durable charging cable. Crafted with premium materials, it delivers fast charging without compromising on durability, making it a reliable companion for all your tech needs.', 
      image: 'https://canlink.co.zw/wp-content/uploads/2023/10/fiber-optic-cable-500x500-1.webp',
      price: 24.99
    },
    { 
      id: 9, 
      name: 'Laptop', 
      description: 'Transform your workflow with our high-performance laptop. Designed with cutting-edge technology, it offers seamless multitasking capabilities and an impressive battery life, perfect for those on the go.', 
      image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/new/laptops-new/matebook-x-series/matebook-x-pro-ultra-premium-edition-card-1.jpg',
      price: 1499.99
    },
    { 
      id: 10, 
      name: 'Phone', 
      description: 'Revolutionize your communication with the latest smartphone, featuring state-of-the-art technology and intuitive design. It adapts to your lifestyle, providing unparalleled connectivity and functionality.', 
      image: 'https://cdn.prod.website-files.com/60efd1ce3ab711f07b596e2e/6361335451017e2a364becd6_blog-img.jpeg',
      price: 899.99
    },
    { 
      id: 11, 
      name: 'Cable', 
      description: 'Stay powered up with our durable charging cable, engineered for optimal performance and longevity. With advanced shielding technology, it delivers fast and reliable charging every time, ensuring your devices are always ready.', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzHiziPEKDZZPfjLo_mEYbLX_4oPt_giCpQ&s',
      price: 19.99
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log(`Added product with ID: ${product.id} to the cart`);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    // Implement your checkout logic here
  };

  const handleBuyNow = (product) => {
    console.log(`Buying product with ID: ${product.id}`);
    // Implement your buy logic here
  };

  return (
    <div>
      <section id="products" className="products-section">
        <div className="products-container">
          <h2 className="products-title">Our Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button 
                  className="add-to-cart-button" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Icon */}
      <div onClick={() => setShowCart(true)} className="cart-icon">
        <FaShoppingCart />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <h3>Your Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <button 
                    className="buy-now-button" 
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </div>
              ))
            )}
            <button 
              className="checkout-button" 
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button className="close-cart" onClick={() => setShowCart(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
