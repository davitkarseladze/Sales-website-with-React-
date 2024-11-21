import React, { useState, useEffect } from 'react';
import './HomePage.css';
import ProductGallery from '../components/ProductGallery';
import SortMenu from '../components/SortMenu';

const translations = {
  en: {
    filter: 'Filter',
    all: 'All',
    onSale: 'On Sale',
    sort: 'Sort',
    asc: 'Price: Low to High',
    desc: 'Price: High to Low',
    alpha: 'Name: A to Z',
    reverseAlpha: 'Name: Z to A',
    prev: '< Prev',
    next: 'Next >'
  },
  fr: {
    filter: 'Filtrer',
    all: 'Tout',
    onSale: 'En Solde',
    sort: 'Trier',
    asc: 'Prix: Bas à Élevé',
    desc: 'Prix: Élevé à Bas',
    alpha: 'Nom: A à Z',
    reverseAlpha: 'Nom: Z à A',
    prev: '< Préc',
    next: 'Suivant >'
  },
  es: {
    filter: 'Filtrar',
    all: 'Todo',
    onSale: 'En Oferta',
    sort: 'Ordenar',
    asc: 'Precio: Bajo a Alto',
    desc: 'Precio: Alto a Bajo',
    alpha: 'Nombre: A a Z',
    reverseAlpha: 'Nombre: Z a A',
    prev: '< Ant',
    next: 'Siguiente >'
  }
};

const HomePage = ({ products, addToCart, cartItems, getTotalPrice, language }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const productsPerPage = 9;

  useEffect(() => {
    setFilteredProducts(products);
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const filterProducts = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'all') {
      setFilteredProducts(products);
    } else if (filter === 'onSale') {
      setFilteredProducts(products.filter(product => product.onSale));
    } else {
      setFilteredProducts(products.filter(product => product.category === filter));
    }
    setCurrentPage(1);
  };

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else if (order === 'alpha') {
        return a.name.localeCompare(b.name);
      } else if (order === 'reverseAlpha') {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredProducts(sortedProducts);
  };



  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const t = translations[language];

  const Filter = ({ filterProducts, categories, selectedFilter }) => {
    const handleFilterChange = (e) => {
      filterProducts(e.target.value);
    };

    return (
      <div className="filter">
        <label>
          {t.filter}:
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="all">{t.all}</option>
            <option value="onSale">{t.onSale}</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  return (
    <div className="homepage">
      <div className="filters-container">
        <Filter filterProducts={filterProducts} categories={categories} selectedFilter={selectedFilter} />
        <SortMenu sortProducts={sortProducts} language={language} />
      </div>
      <ProductGallery products={currentProducts} addToCart={addToCart} />
      <div className="pagination">
        <button className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`} onClick={handlePreviousPage} disabled={currentPage === 1}>
          {t.prev}
        </button>
        <span className="page-number">{currentPage}</span>
        <button className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`} onClick={handleNextPage} disabled={currentPage === totalPages}>
          {t.next}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
