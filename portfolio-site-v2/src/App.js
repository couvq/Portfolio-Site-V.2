import React from "react";

import NavBar from "./components/Nav/NavBar";
import Hero from "./components/Hero/Hero";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import About from "./components/About/About";

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
      </ThemeProvider>
    </>
  );
};

export default App;
