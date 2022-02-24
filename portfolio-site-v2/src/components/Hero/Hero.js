import { Container } from "@mui/material";
import React from "react";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <Container sx={{ margin: "5rem 2.5rem", width: '100vw', height: '100vh', marginTop: '10rem' }}>
      <div style={{ position: 'absolute'}}>
        <HeroText />
        <HeroButtons />
      </div>
      <Illustration />
    </Container>
  );
};

export default Hero;
