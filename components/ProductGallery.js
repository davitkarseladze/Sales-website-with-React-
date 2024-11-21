import React from 'react';
import ProductCard from './ProductCard';

const ProductGallery = ({ products }) => (
  <div className="product-gallery">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductGallery;