import React from "react";
import { Grid } from "@mui/material";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import { Box } from "@mui/system";

const About = () => {
  return (
    <div id="About" style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={10} justify="center" margin="5rem 2.5rem">
          <Grid item sm={12} md={4} >
            <Box display="flex" justifyContent="center" alignItems="center">
              <AboutImage />
            </Box>
          </Grid>
          <Grid item sm={12} md={8}>
            <AboutText / >
          </Grid>
        </Grid>
    </div>
  );
};

export default About;
