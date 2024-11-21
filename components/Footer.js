import React from 'react';
import SocialLinks from './SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Dato Karseladze</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;