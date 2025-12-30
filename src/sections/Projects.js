import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import Slider from 'react-slick';
import '../styles/Projects.scss';

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  const projectsData = [
    {
      title: t.projects.cep.title,
      description: t.projects.cep.description,
      link: 'https://github.com/EduBatalha/AdressInfoVerificator',
    },
    {
      title: t.projects.stock.title,
      description: t.projects.stock.description,
      link: 'https://github.com/EduBatalha/ProductManagement',
    },
    {
      title: t.projects.api.title,
      description: t.projects.api.description,
      link: 'https://github.com/EduBatalha/Product-Management-API',
    },
    {
      title: t.projects.portfolio.title,
      description: t.projects.portfolio.description,
      link: 'https://github.com/EduBatalha/portfolio',
    },
    {
      title: t.projects.coming.title,
      description: t.projects.coming.description,
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
      <h2>{t.projects.title}</h2>
      <Slider {...settings}>
        {projectsData.map((project, index) => (
          <div key={index} className="projeto-card">
            <h3>{project.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{t.projects.link}</a>}
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;
