// components/Projects.js

import React from 'react';
import Slider from 'react-slick';
import '../styles/Projects.scss';

function Projects() {
  const projectsData = [
    {
      title: 'Buscador de CEP',
      description: 'Aplicação mobile que consulta <br />a API ViaCEP, construída com padrão MVVM.',
      link: 'https://github.com/EduBatalha/AdressInfoVerificator',
    },
    {
      title: 'Página gestão de Estoque',
      description: 'É uma página de gerenciamento de estoque que utiliza Java com framework Spring, juntamente com JSP.',
      link: 'https://github.com/EduBatalha/ProductManagement',
    },
    {
        title: 'API Rest Cadastro Produto',
        description: 'É uma API no padrão REST construída em Java 8 sem auxilio de frameworks e bibliotecas de persistência.',
        link: 'https://github.com/EduBatalha/Product-Management-API',
      },
      {
        title: 'Este Portfólio :)',
        description: 'Esse portfólio é uma aplicação React no padrão de arquitetura SPA, utilizei JavaScript, HTML e SCSS.',
        link: 'https://github.com/EduBatalha/portfolio',
      },
      {
        title: 'Em andamento..',
        description: 'Logo terei novos projetos para expor.',
      },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.6,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
          
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
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Link para o Projeto</a>}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
