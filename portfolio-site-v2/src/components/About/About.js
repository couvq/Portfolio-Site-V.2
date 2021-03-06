import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = ({ language }) => {
  return (
    <div
      id="About"
      style={{
        margin: "auto",
        width: "100vw",
        height: "100vh",
        padding: "2.5rem 5rem",
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <AboutImage />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box
            sx={{
              width: {
                sm: "100vw",
                md: "50vw",
              },
            }}
          >
            <AboutText language={language} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
