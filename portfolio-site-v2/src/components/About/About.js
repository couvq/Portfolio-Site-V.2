import React from "react";
import { Container, Grid } from "@mui/material";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div id="About" style={{width: '100vw', height: '100vh'}}>
      <Container>
        <Grid container spacing={6} justify="center" alignItems="center" justifyContent="center" margin="5rem 2.5rem">
          <Grid item sm={12} md={6} >
            <AboutImage />
          </Grid>
          <Grid item sm={12} md={6}>
            <AboutText />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
