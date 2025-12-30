import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import '../styles/Footer.scss';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer-container">
      <p>{t.footer.text}</p>
    </footer>
  );
}

export default Footer;