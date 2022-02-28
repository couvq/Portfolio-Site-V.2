import { Grid } from "@mui/material";
import React from "react";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div
      id="About"
      style={{
        width: "100%",
        height: "auto",
        margin: '2.5rem 5rem',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={4}>
          <AboutImage />
        </Grid>
        <Grid item xs={12} md={8}>
          <AboutText />
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
