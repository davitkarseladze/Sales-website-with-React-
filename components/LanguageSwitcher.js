import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="language-switcher">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
