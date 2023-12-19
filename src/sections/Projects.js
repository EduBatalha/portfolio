// components/Projects.js

import React from 'react';
import Slider from 'react-slick';
import '../styles/Projects.scss';

function Projects() {
  const projectsData = [
    {
      title: 'Nome do Projeto 1',
      description: 'Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#',
    },
    {
      title: 'Nome do Projeto 2',
      description: 'Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#',
    },
    {
        title: 'Nome do Projeto 2',
        description: 'Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '#',
      },
      {
        title: 'Nome do Projeto 2',
        description: 'Descrição do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '#',
      },
      {
        title: 'Em andamento...',
        description: 'Logo terei novos projetos para expor.',
      },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.8, // Defina o número de cartões a serem exibidos ao mesmo tempo
    slidesToScroll: 1,
  };

  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className="projeto-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link}>Link para o Projeto</a>}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
