import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.scss';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
      title={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
    >
      {language === 'en' ? 'PT' : 'EN'}
    </button>
  );
}

export default LanguageToggle;

