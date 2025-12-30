import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import '../styles/Experience.scss';
import '../styles/Global.scss';

function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experiencia" aria-label="Seção de experiência profissional">
      <h2>{t.experience.title}</h2>

      <div>
        <h3>{t.experience.reclame.title}</h3>
        <p className='cargo'>{t.experience.reclame.position}</p>
        <p>
          {t.experience.reclame.description} <strong>{t.experience.reclame.descriptionBold1}</strong> {language === 'en' ? 'and' : 'e'} <strong>{t.experience.reclame.descriptionBold2}</strong> {t.experience.reclame.descriptionEnd}
        </p>
      </div>

      <div>
        <h3>{t.experience.freelancer.title}</h3>
        <p className='cargo'>{t.experience.freelancer.position}</p>
        <p>
          {t.experience.freelancer.description} <strong>{t.experience.freelancer.descriptionBold1}</strong> {language === 'en' ? 'and the use of' : 'e o uso de'} <strong>{t.experience.freelancer.descriptionBold2}</strong> {t.experience.freelancer.descriptionEnd}
        </p>
      </div>

      <div>
        <h3>{t.experience.newgo.title}</h3>
        <p className='cargo'>{t.experience.newgo.position}</p>
        <p>{t.experience.newgo.description}</p>
      </div>
    </section>
  );
}

export default Experience;