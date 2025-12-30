import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="sobre" aria-label="Seção sobre mim">
      <h2>{t.about.title}</h2>
      <p>
        {t.about.paragraph1}<br />
        {language === 'en' ? 'With a degree in' : 'Com formação em'} <strong>{t.about.paragraph1Bold1}</strong> {language === 'en' ? 'and an' : 'e um'} <strong>{t.about.paragraph1Bold2}</strong>, {t.about.paragraph1Rest}
      </p>
      <p>
        {t.about.paragraph2} <strong>{t.about.paragraph2Bold1}</strong>, {t.about.paragraph2Rest} <strong>{t.about.paragraph2Bold2}</strong> {t.about.paragraph2End}
      </p>
      <p>
        {t.about.paragraph3} <strong>{t.about.paragraph3Bold1}</strong> {language === 'en' ? 'and' : 'e'} {language === 'en' ? 'AI' : 'IA'} (<strong>{t.about.paragraph3Bold2}</strong>) {t.about.paragraph3Rest}<strong>{t.about.paragraph3Bold3}</strong>{t.about.paragraph3End}
      </p>
    </section>
  );
}

export default About;