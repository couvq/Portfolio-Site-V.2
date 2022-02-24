import React from "react";

import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

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
      </ThemeProvider>
    </>
  );
};

export default App;
