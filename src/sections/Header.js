import React from 'react';

import '../styles/Header.scss';
import '../styles/Global.scss';

function Header() {
  return (
    <section id="header">
          <header>
            <div className='tela1'>
              <div className="header">
                  <p className='first-text'>Olá, me chamo</p>
                  <h1>EDUARDO <br>
                  </br>BATALHA</h1>
                  <p className='first-text'>e gosto de simplificar coisas complicadas</p>
              </div>
              <div className="grid">
              
                <div className="item">
                  <img src='https://i.pinimg.com/564x/1a/bb/e9/1abbe9b61eac9e87c845c4f2e1ea1356.jpg' alt='Imagem 1'></img>
                </div>
                <div className="item" style={{ gridRow: 'span 2' }}>
                  <img src='https://66.media.tumblr.com/43ff1ae84968ffd84606207e9995a78e/tumblr_py4mvbGe6h1tgo74ho1_1280.gif' alt='Imagem 3' />
                </div>
                <div className="item"> 
                  <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXJnajd0MXVwYndoeDJydTQ2MHc1NzBmZm9qMHRjZzlsaGlvYWZ3OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gH1jGsCnQBiFHWMFzh/giphy.gif' alt='Imagem 2'></img>
                </div>
                
              </div>

            </div>
          </header>
        </section>
  );
}

export default Header;