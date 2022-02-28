import React from "react";
import { Container, Grid } from "@mui/material";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div id="About">
      <Container sx={{ width: '100vh', height: '100vh'}}>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item sm={12} md={6}>
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
