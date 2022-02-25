import { Stack, Button } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

const data = {
  En : ["About", "Projects", "Technologies", "Contact"],
  Fr : ["", "", "", ""]
}

// console.log(data.En[0]); accesses "About"

const NavLinks = ({ language }) => {



  // need to access four things (array? yes)
  const [text, changeText] = useState([data.En[0], data.En[1], data.En[2], data.En[3]]);

  // if language is english('En'), set to english. else set to french('Fr').
  const changeTextOnLanguageChange = () => {
    if (language === 'En') {
      // change to english array
      changeText([data.En[0], data.En[1], data.En[2], data.En[3]]);
      return;
    }
    changeText([data.Fr[0], data.Fr[1], data.Fr[2], data.Fr[3]]);
  }

  // change textdata if language changes
useEffect(() => {
  changeTextOnLanguageChange();
}, [language]);

  return (
    <Stack
   direction="row" 
   spacing={3}
   sx= {{
     display: {
       xs: 'none',
       sm: 'none',
       md: 'flex'
     }
   }}
   >
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#About'>{text[0]}</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Projects'>{text[1]}</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Technologies'>{text[2]}</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Contact'>{text[3]}</Button>
    </Stack>
  );
}

export default NavLinks;