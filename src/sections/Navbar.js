import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import '../styles/Navbar.scss';
import '../styles/Global.scss';

function Navbar() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Desktop Menu */}
      <ul className="navbar-desktop">
        <li><a href="#sobre">{t.nav.about}</a></li>
        <li><a href="#projetos">{t.nav.projects}</a></li>
        <li><a href="#habilidades">{t.nav.skills}</a></li>
        <li><a href="#educacao">{t.nav.education}</a></li>
        <li><a href="#experiencia">{t.nav.experience}</a></li>
        <li><a href="#contato">{t.nav.contact}</a></li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
        <ul className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <li><a href="#sobre" onClick={closeMenu}>{t.nav.about}</a></li>
          <li><a href="#projetos" onClick={closeMenu}>{t.nav.projects}</a></li>
          <li><a href="#habilidades" onClick={closeMenu}>{t.nav.skills}</a></li>
          <li><a href="#educacao" onClick={closeMenu}>{t.nav.education}</a></li>
          <li><a href="#experiencia" onClick={closeMenu}>{t.nav.experience}</a></li>
          <li><a href="#contato" onClick={closeMenu}>{t.nav.contact}</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
