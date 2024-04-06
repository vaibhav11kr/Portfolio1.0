import React from 'react';
import { motion } from 'framer-motion';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';

const App = () => {
  return (
    <>
      <Header />
      <motion.main className='main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </motion.main>
      <Footer />
      <Scrollup />
    </>
  )
}

export default App;
