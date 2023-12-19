// components/Navbar.js

import React from 'react';
import '../styles/Navbar.scss';
import '../styles/Global.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#sobre">About</a></li>
        <li><a href="#projetos">Projects</a></li>
        <li><a href="#habilidades">Skills</a></li>
        {/* Adicione mais itens conforme necessário */}
      </ul>
    </nav>
  );
}

export default Navbar;
