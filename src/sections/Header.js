import React from 'react';

import '../styles/Header.scss';
import '../styles/Global.scss';

function Header() {
  return (
    <section id="header">
          <header>
            <div className="header">
                <p className='first-text'>Olá, me chamo</p>
                <h1>EDUARDO <br>
                </br>BATALHA</h1>
                <p className='first-text'>e gosto de simplificar coisas complicadas</p>
            </div>
          </header>
        </section>
  );
}

export default Header;