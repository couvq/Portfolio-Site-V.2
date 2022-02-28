import { Grid } from "@mui/material";
import React from "react";

import AboutImage from './AboutImage';
import AboutText from './AboutText';

const About = () => {
  return (
    <div 
    id="About"
    style={{
      width: "100%",
      height: 'auto'
    }}
    >
    <Grid container spacing={5}>
      <Grid item sm={12} md={4}>
        <AboutImage />
      </Grid>
      <Grid item sm={12} md={8}>
        <AboutText />
      </Grid>
    </Grid>
      About
    </div>
  );
};

export default About;
