import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import '../styles/Education.scss';
import '../styles/Global.scss';

function Education() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="educacao" aria-label="Seção de educação">
      <h2>{t.education.title}</h2>

      <div>
        <h3>{t.education.mba.title}</h3>
        <p className='instituicao'>{t.education.mba.institution}</p>
        <p>{t.education.mba.description}</p>
      </div>

      <div>
        <h3>{t.education.degree.title}</h3>
        <p className='instituicao'>{t.education.degree.institution}</p>
        <p>{t.education.degree.description}</p>
      </div>

      <div>
        <h3>{t.education.technical.title}</h3>
        <p className='instituicao'>{t.education.technical.institution}</p>
        <p>{t.education.technical.description}</p>
      </div>
    </section>
  );
}

export default Education;