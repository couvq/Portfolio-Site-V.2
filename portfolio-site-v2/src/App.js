import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';


const App = () => {

  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
    </>
  );
}

export default App;