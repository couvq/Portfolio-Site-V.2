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
        <Button href='#'>About</Button>
        <Button href='#'>Projects</Button>
        <Button href='#'>Technologies</Button>
        <Button href='#'>Contact</Button>
    </Stack>
  );
}

export default NavLinks;