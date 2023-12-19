import React from 'react';
import Header from './sections/Header';
import Footer from './sections/Footer';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Navbar from './sections/Navbar';
import './App.css';


function App() {
  return (
    
    <div>
      <Navbar />
      <Header />
      <About />
      <div className='line'></div>
      <Projects />
      <div className='line'></div>
      <Skills />
      <Education />
      <div className='line'></div>
      <Experience />
      <div className='line'></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
