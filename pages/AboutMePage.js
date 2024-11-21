import React from 'react';
import './AboutMePage.css';

const translations = {
  en: {
    aboutMe: 'About Me',
    name: 'Name',
    email: 'Email'
  },
  fr: {
    aboutMe: 'À propos de moi',
    name: 'Nom',
    email: 'Email'
  },
  es: {
    aboutMe: 'Sobre mí',
    name: 'Nombre',
    email: 'Correo electrónico'
  }
};

const AboutMePage = ({ name, email, language }) => {
  const t = translations[language];

  const displayName = name || 'Name Example';
  const displayEmail = email || 'example@gmail.com';

  return (
    <div className="about-me">
      <h1>{t.aboutMe}</h1>
      <div className="info">
        <p><span className="label">{t.name}:</span> <span className="value">{displayName}</span></p>
        <p><span className="label">{t.email}:</span> <span className="value">{displayEmail}</span></p>
      </div>
    </div>
  );
};

export default AboutMePage;