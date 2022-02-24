import { Container } from "@mui/material";
import React from "react";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <Container sx={{ margin: '5rem 2.5rem'}}>
      <HeroText />
      <HeroButtons />
    </Container>
  );
};

export default Hero;
