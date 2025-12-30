import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import '../styles/Navbar.scss';
import '../styles/Global.scss';

function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#sobre">{t.nav.about}</a></li>
        <li><a href="#projetos">{t.nav.projects}</a></li>
        <li><a href="#habilidades">{t.nav.skills}</a></li>
        <li><a href="#educacao">{t.nav.education}</a></li>
        <li><a href="#experiencia">{t.nav.experience}</a></li>
        <li><a href="#contato">{t.nav.contact}</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
