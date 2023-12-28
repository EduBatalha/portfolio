import React from 'react';
import Slider from 'react-slick';
import '../styles/Skills.scss';
import '../styles/Global.scss';


function Skills() {
  // Dados das habilidades
  const skillsData = [
    
    { id: 1, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
    { id: 2, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
    { id: 3, name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { id: 4, name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 5, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 6, name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { id: 7, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 8, name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { id: 9, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { id: 10, name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg' },
    { id: 11, name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { id: 12, name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { id: 13, name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { id: 14, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg' },
    { id: 15, name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg' },
    { id: 16, name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' },
    { id: 17, name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { id: 18, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 19, name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
  ];

  // Configurações do carrossel
  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: 60,
    slidesToScroll: 1, // Número de itens a serem rolados de cada vez
    slidesToShow: 1.8, // Número de itens a serem exibidos por linha
    rows: 2, // Número de linhas
    slidesPerRow: 2,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          speed: 500,
          slidesToShow: 1.8, 
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
    <section id="habilidades">
      <h2>Técnologias que uso</h2>
      <Slider {...carouselSettings}>
        {skillsData.map(skill => (
          <div className="skills">
            <div key={skill.id} className="skill">
              <img src={skill.icon} className="img-skill" alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Skills;