import React from 'react';

const translations = {
  en: {
    sortBy: 'Sort by',
    asc: 'Price: Low to High',
    desc: 'Price: High to Low',
    alpha: 'Alphabetically: A to Z',
    reverseAlpha: 'Alphabetically: Z to A'
  },
  fr: {
    sortBy: 'Trier par',
    asc: 'Prix: Bas à Élevé',
    desc: 'Prix: Élevé à Bas',
    alpha: 'Alphabétiquement: A à Z',
    reverseAlpha: 'Alphabétiquement: Z à A'
  },
  es: {
    sortBy: 'Ordenar por',
    asc: 'Precio: Bajo a Alto',
    desc: 'Precio: Alto a Bajo',
    alpha: 'Alfabéticamente: A a Z',
    reverseAlpha: 'Alfabéticamente: Z a A'
  }
};

const SortMenu = ({ sortProducts, language }) => {
  const handleSortChange = (e) => {
    sortProducts(e.target.value);
  };

  const t = translations[language];

  return (
    <div className="sort-menu">
      <label>
        {t.sortBy}:
        <select onChange={handleSortChange}>
          <option value="asc">{t.asc}</option>
          <option value="desc">{t.desc}</option>
          <option value="alpha">{t.alpha}</option>
          <option value="reverseAlpha">{t.reverseAlpha}</option>
        </select>
      </label>
    </div>
  );
};

export default SortMenu;
