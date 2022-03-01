import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

import AboutSocialLinks from "./AboutSocialLinks";

const data = {
  En: [
    "About Me",
    "I'm a Frontend Developer currently based in Detroit, MI.",
    `I'm a curious minded person that can't look at a website or app without
  thinking about how it works under the hood. I enjoy taking complex
  problems and turning them into simple, elegant solutions - with whatever
  tools I have at my disposal.`,
    `When I'm not coding you'll probably find me in the gym, reading, or
    hanging out with friends.`,
  ],
  Fr: [
    `À propos de moi`,
    `Je suis un développeur frontend actuellement basé à Detroit, MI.`,
    `Je suis une personne curieuse d'esprit qui ne peut pas regarder un site Web ou une application sans réfléchir à la façon dont cela fonctionne sous le capot. J'aime prendre des problèmes complexes et les transformer en solutions simples et élégantes - avec tous les outils dont je dispose.`,
    `Quand je ne code pas, vous me trouverez probablement au gymnase, en train de lire ou de sortir avec des amis.`,
  ],
};

const AboutText = ({ language }) => {
  const [text, changeText] = useState([
    data.En[0],
    data.En[1],
    data.En[2],
    data.En[3],
  ]);

  const changeTextOnLanguageChange = () => {
    if (language === "En") {
      // set to english text and break
      changeText([data.En[0], data.En[1], data.En[2], data.En[3]]);
      return;
    }
    changeText([data.Fr[0], data.Fr[1], data.Fr[2], data.Fr[3]]);
  };

  // change textdata if language changes
  useEffect(() => {
    changeTextOnLanguageChange();
  }, [language]);

  return (
    <>
      <Typography variant="h5">{text[1]}</Typography>
      <br />
      <Typography>{text[2]}</Typography>
      <br />
      <Typography>{text[3]}</Typography>
      <br />
      <AboutSocialLinks />
    </>
  );
};

export default AboutText;
