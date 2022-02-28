import React from "react";
import { Container, Grid } from "@mui/material";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";
import { Box } from "@mui/system";

const About = () => {
  return (
    <div id="About" style={{ width: "100vw", height: "100vh" }}>
      <Container>
        <Grid container spacing={6} justify="center" margin="5rem 2.5rem">
          <Grid item sm={12} md={4} justify="center">
            <Box display="flex" justifyContent="center" alignItems="center">
              <AboutImage />
            </Box>
          </Grid>
          <Grid item sm={12} md={8}>
            <AboutText />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
