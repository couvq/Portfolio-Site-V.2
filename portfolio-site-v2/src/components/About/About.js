import React from "react";
import { Container, Grid } from "@mui/material";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div id="About">
      <Container>
        <Grid container spacing={4}>
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
