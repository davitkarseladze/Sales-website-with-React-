import React from 'react';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

const translations = {
  en: {
    getInTouch: 'Get in Touch',
    submit: 'Submit'
  },
  fr: {
    getInTouch: 'Entrer en contact',
    submit: 'Soumettre'
  },
  es: {
    getInTouch: 'Póngase en contacto',
    submit: 'Enviar'
  }
};

const ContactPage = ({ language }) => {
  const t = translations[language];

  return (
    <div className="contact-container">
      <h2 className="contact-heading">{t.getInTouch}</h2>
      <div className="contact-form-container">
        <ContactForm />
        <button className="submit-button">{t.submit}</button>
      </div>
    </div>
  );
};

export default ContactPage;
