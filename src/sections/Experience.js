import React from 'react';
import '../styles/Experience.scss';
import '../styles/Global.scss';

function Experience() {
  return (
    <section id="experiencia">
          <h2>Experiência Profissional</h2>
          <a>Freelancer</a>
          <p className='cargo'>Desenvolvedor Full-stack</p>
          <p>Atualmente estou atuando como desenvolvedor Full-stack freelancer, costumo utilizar principalmente
            técnologias como Sass <br></br>e React para o front e Java com Spring para o back, além de utilizar Docker e SQL.</p>
     
          <a><br></br>NewGo Tecnologia</a>
          <p className='cargo'>Estagiário Full-Stack.</p>
          <p>Atuei como estágiario full-stack, lidava principalmente com APIs utilizando Java 8, Html, CSS, JavaScript, TomCat e SQL em um ambiente Linux.</p>
        </section>
  );
}

export default Experience;