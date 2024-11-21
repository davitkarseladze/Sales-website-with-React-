import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Link to={`/product/${product.id}`}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        {product.onSale && <span className="sale-tag">On Sale!</span>}
        {!product.visible && <span className="outofstock-tag">Out of Stock</span>}
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Link>
  </div>
);

export default ProductCard;
