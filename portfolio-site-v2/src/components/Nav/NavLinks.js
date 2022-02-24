import { Stack, Button } from '@mui/material';
import React from 'react';


const NavLinks = () => {



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
        <Button href='#About'>About</Button>
        <Button href='#Projects'>Projects</Button>
        <Button href='#Technologies'>Technologies</Button>
        <Button href='#Contact'>Contact</Button>
    </Stack>
  );
}

export default NavLinks;