// components/Navbar.js

import React from 'react';
import '../styles/Navbar.scss';
import '../styles/Global.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#educacao">Educação</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#contato">Contato</a></li>
        {/* Adicione mais itens conforme necessário */}
      </ul>
    </nav>
  );
}

export default Navbar;
