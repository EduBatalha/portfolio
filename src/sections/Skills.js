import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import Slider from 'react-slick';
import '../styles/Skills.scss';
import '../styles/Global.scss';


function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  // Dados das habilidades
  const skillsData = [
    { id: 1, name: 'n8n', icon: 'https://cdn.simpleicons.org/n8n/FF6D5A' },
    { id: 2, name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor/333333' },
    { id: 3, name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { id: 4, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg' },
    { id: 5, name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
    { id: 6, name: 'Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' },
    { id: 7, name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { id: 8, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 9, name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { id: 10, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { id: 11, name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { id: 12, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { id: 13, name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg' },
    { id: 14, name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { id: 15, name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { id: 16, name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { id: 17, name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg' },
    { id: 18, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { id: 19, name: 'Windows', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
    { id: 20, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
    { id: 21, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' },
    { id: 22, name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { id: 23, name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
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
    slidesToScroll: 1,
    slidesToShow: 1.8,
    rows: 2,
    slidesPerRow: 2,
    arrows: true, // Habilitar setas por padrão (desktop)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          speed: 500,
          slidesToShow: 1.8, 
          slidesToScroll: 1,
          centerMode: true,
          arrows: true, // Manter setas em telas grandes
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false, // Desabilitar setas no mobile
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        }
      }
  ]
  };

  return (
    <section id="habilidades">
      <h2>{t.skills.title}</h2>
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