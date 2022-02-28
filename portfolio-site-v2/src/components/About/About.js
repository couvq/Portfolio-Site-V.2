import React from "react";
import { Container, Grid } from "@mui/material";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <div id="About">
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <AboutImage />
          </Grid>
          <Grid item sm={12} md={6}>
            {/* TODO: this is where our About me section text/ navlinks goes */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
