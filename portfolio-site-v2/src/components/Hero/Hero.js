import { Container, Stack } from "@mui/material";
import React from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <Container
      sx={{
        margin: "5rem 2.5rem",
        width: "100vw",
        height: "100vh",
        marginTop: "10rem",
      }}
    >
      <Stack direction="row" spacing={100}>
        <div style={{ position: "absolute" }}>
          <HeroText />
          <HeroButtons />
        </div>
        <Illustration />
      </Stack>
    </Container>
  );
};

export default Hero;
