import {Box, Container, Stack } from "@mui/material";
import React from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import Illustration from "./Illustration";

const Hero = ({ language }) => {

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });

  return (
    <Container
      sx={{
        margin: "5rem 2.5rem",
        width: "100vw",
        height: "100vh",
        marginTop: "10rem",
      }}
    >
      <Stack direction="row" spacing={isMediumScreen ? 0 : 70}>
        <div style={{ position: "absolute" }}>
          <Box sx={{ padding: '1.5rem',width: '30rem', background: 'rgba(255,255,255, 0.5)', borderRadius: '5%'}}>
          <HeroText language={language} />
          <HeroButtons language={language} />
          </Box>
        </div>
        <Illustration />
      </Stack>
    </Container>
  );
};

export default Hero;
