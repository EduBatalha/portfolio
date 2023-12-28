import React from 'react';
import '../styles/Education.scss';
import '../styles/Global.scss';

function Education() {
  return (
    <section id="educacao">
          <h2>Educação</h2>
          <a>Tecnólogo em Análise e Desenvolvimento de Sistemas  2022-2023</a>
          <p className='instituicao'>Universidade de Mogi das Cruzes</p>
          <p>Fui bolsista integral na UMC, onde realizei projetos web, mobile e locais, fiz apresentações em equipe e aprendi sobre gestão e desenvolvimento de projetos.</p>
     
          <a><br></br>Técnico em Mecânica Industrial  2019-2021</a>
          <p className='instituicao'>ETEC Presidente Vargas</p>
          <p>Durante meu curso técnico em Mecânica Industrial, eu acabei me apaixonando por automação, o que acabou por levando me levar para a área de técnologia e programação.</p>
        </section>
  );
}

export default Education;