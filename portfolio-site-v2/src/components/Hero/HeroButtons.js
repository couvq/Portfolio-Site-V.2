import { Button, Stack, StepContext } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

const data = {
  En: ["See My Work", "About Me"],
  Fr: ["Voir mon travail", "À propos de moi"]
}

const HeroButtons = ({ language }) => {

  const [text, changeText] = useState([data.En[0], data.En[1]]);

  const changeTextOnLanguageChange = () => {
    if ( language === 'En') {
      // set text to English text
      changeText([data.En[0], data.En[1]]);
      return; // bc we don't want to enter next section
    }
    changeText([data.Fr[0], data.Fr[1]]); // set to french text
  }

  // change textdata if language changes
useEffect(() => {
  changeTextOnLanguageChange();
}, [language]);


  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: '1.5rem'}}>
        <Button variant="contained" size='large' sx={{ color: '#fff'}} href="#Projects">{text[0]}</Button>
        <Button variant="outlined" size='large' href="#About">{text[1]}</Button>
    </Stack>
  );
}

export default HeroButtons;