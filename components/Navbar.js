import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const translations = {
  en: {
    home: 'Home',
    aboutMe: 'About Me',
    signUp: 'Sign Up',
    contact: 'Contact',
    cart: 'Cart',
    logout: 'Log Out',
    searchPlaceholder: 'Search...'
  },
  fr: {
    home: 'Accueil',
    aboutMe: 'À Propos de Moi',
    signUp: 'S’inscrire',
    contact: 'Contact',
    cart: 'Panier',
    logout: 'Déconnexion',
    searchPlaceholder: 'Chercher...'
  },
  es: {
    home: 'Inicio',
    aboutMe: 'Sobre Mí',
    signUp: 'Registrarse',
    contact: 'Contacto',
    cart: 'Carrito',
    logout: 'Cerrar Sesión',
    searchPlaceholder: 'Buscar...'
  }
};

const Navbar = ({ cartItems, setSearchQuery, isAuthenticated, language, setLanguage }) => {
  const navbarRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (navbar) {
        if (window.pageYOffset > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const t = translations[language];

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <Link to="/">Sales Platform</Link>
      </div>
      <div className={`hamburger-menu ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-nav ${showMenu ? 'active' : ''}`}>
        {isAuthenticated && <li><Link to="/">{t.home}</Link></li>}
        {isAuthenticated && <li><Link to="/aboutme">{t.aboutMe}</Link></li>}
        {!isAuthenticated && <li><Link to="/signup">{t.signUp}</Link></li>}
        {isAuthenticated && <li><Link to="/contact">{t.contact}</Link></li>}
        {isAuthenticated && <li><Link to="/cart">{t.cart} ({cartItems.length})</Link></li>}
        {isAuthenticated && <li><Link to="/logout">{t.logout}</Link></li>}
        {isAuthenticated && <li><LanguageSwitcher language={language} setLanguage={setLanguage} /></li>}
      </ul>
      <div className="navbar-extras">
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field"
        />
      </div>
    </nav>
  );
};

export default Navbar;
