import React from 'react';

const Cart = ({ cartItems, total, removeFromCart }) => (
  <div className="cart">
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="cart-total">
          Total: ${total.toFixed(2)}
        </div>
      </>
    )}
  </div>
);

export default Cart;