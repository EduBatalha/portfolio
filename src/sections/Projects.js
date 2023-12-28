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
        title: 'Em andamento..',
        description: 'Logo terei novos projetos para expor.',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.8, // Defina o número de cartões a serem exibidos ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: 10,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            speed: 500,
            slidesToShow: 2.8, 
            slidesToScroll: 1,
            centerMode: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
            centerMode: true,
          }
        }
    ]

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
