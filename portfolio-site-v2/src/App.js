import React from "react";
import { useState } from "react";

import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

const App = () => {

  const [language, setLanguage] = useState('En');

  // IMPORTANT!!! This Function changes language but it gets passed down a huge chain of components:
  //App -> NavBar -> ActionButtons -> LanguageToggler (Finally!!!)
  const languageToggler = (e) => {
    setLanguage(e.target.value);
    
  }

  const theme = createTheme({
    palette: {
      primary: lightBlue,
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar language={language} setLanguage={languageToggler} />
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Technologies />
        <Contact />
      </ThemeProvider>
    </>
  );
};

export default App;
