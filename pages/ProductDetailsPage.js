import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = ({ products, addToCart, cartItems }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-page">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.onSale && <span className="sale-tag">Sale</span>}
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="price-container">
          <span className="price">${product.price}</span>
          {product.onSale && <span className="old-price">${product.oldPrice}</span>}
        </div>
        <div className="button-container">
          {!product.visible ? (
            <button disabled className="out-of-stock">
              OUT OF STOCK
            </button>
          ) : (
            <button onClick={handleAddToCart} disabled={isInCart}>
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
