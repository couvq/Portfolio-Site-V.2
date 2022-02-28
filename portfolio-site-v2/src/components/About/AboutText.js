import { Typography } from "@mui/material";
import React from "react";

import AboutSocialLinks from "./AboutSocialLinks";

const AboutText = () => {
  return (
    <>
      <Typography variant="h2">About Me</Typography>
      <br />
      <Typography variant="h5">
        I'm a Front End Developer currently based in Detroit, MI.
      </Typography>
      <br />
      <Typography>
        I'm a curious minded person that can't look at a website or app without
        thinking about how it works under the hood. I enjoy taking complex
        problems and turning them into simple, elegant solutions - with whatever
        tools I have at my disposal.
      </Typography>
      <br />
      <Typography>
        When I'm not coding, you'll probably find me in the gym, reading, or
        hanging out with friends.
      </Typography>
      <br />
      <AboutSocialLinks />
    </>
  );
};

export default AboutText;
