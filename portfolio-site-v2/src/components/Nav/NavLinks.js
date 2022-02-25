import { Stack, Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';


const NavLinks = ({ language }) => {

  const changeLanguage = () => {
    console.log('the language changed in NavLinks Component: ' + language);
  }

  // change textdata if language changes
useEffect(() => {
  changeLanguage();
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
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#About'>About</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Projects'>Projects</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Technologies'>Technologies</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Contact'>Contact</Button>
    </Stack>
  );
}

export default NavLinks;