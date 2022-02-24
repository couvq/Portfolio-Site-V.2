import { Container } from "@mui/material";
import React from "react";

import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container sx={{ margin: '5rem 2.5rem'}}>
      <HeroText />
    </Container>
  );
};

export default Hero;
