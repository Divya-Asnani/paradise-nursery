import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="product-image" />
      <h3 className="product-name">{plant.name}</h3>
      <p className="product-price">${plant.price.toFixed(2)}</p>
      <button 
        className="add-to-cart-btn" 
        onClick={handleAddToCart} 
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
