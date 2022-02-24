import React from "react";

import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

const App = () => {

  const theme = createTheme({
    palette: {
      primary: lightBlue,
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Contact />
      </ThemeProvider>
    </>
  );
};

export default App;
