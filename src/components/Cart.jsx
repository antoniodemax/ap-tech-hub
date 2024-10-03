import React from 'react';

const Cart = ({ cart, handleCheckout, closeCart }) => {
  return (
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
            </div>
          ))
        )}
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
        <button className="close-cart" onClick={closeCart}>Close</button>
      </div>
    </div>
  );
};

export default Cart;
