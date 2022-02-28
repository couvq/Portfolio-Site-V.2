import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const data = {
  En: [
    "Hi! I'm Quentin.",
    "I'm a Frontend Developer passionate about creating stunning experiences for my users.",
  ],
  Fr: [
    "Bonjour! Je m'appele Quentin.",
    "Je suis un développeur frontend passionné par la création d'expériences époustouflantes pour mes utilisateurs.",
  ],
};

const HeroText = ({ language }) => {
  const [text, changeText] = useState([data.En[0], data.En[1]]); // english initially

  const changeTextOnLanguageChange = () => {
    if (language === "En") {
      // set text to english text
      changeText([data.En[0], data.En[1]]);
      return; // don't continue
    }
    changeText([data.Fr[0], data.Fr[1]]);
  };

  // change textdata if language changes
  useEffect(() => {
    changeTextOnLanguageChange();
  }, [language]);

  return (
    <>
      <Typography variant="h1">{text[0]}</Typography>
      <Typography variant="h6">{text[1]}</Typography>
    </>
  );
};

export default HeroText;
