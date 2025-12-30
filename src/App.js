import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './sections/Header';
import Footer from './sections/Footer';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Navbar from './sections/Navbar';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <div>
        <LanguageToggle />
        <Navbar />
        <Header />
        <About />
        <div className='line'></div>
        <Experience />
        <div className='line'></div>
        <Education />
        <div className='line'></div>
        <Skills />
        <div className='line'></div>
        <Projects />
        <div className='line'></div>
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
