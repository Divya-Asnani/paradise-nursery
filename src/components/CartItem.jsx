import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { updateQuantity, removeItem } from '../redux/CartSlice';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleIncrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity - 1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  const handleCheckout = () => {
    alert('Checkout coming soon!');
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-summary-top">
              <p>Total Items: {totalItems}</p>
              <p>Total Cost: ${totalCost.toFixed(2)}</p>
            </div>
            
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <span>Quantity:</span>
                      <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
                    </div>
                    <p>Item Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartItem;
