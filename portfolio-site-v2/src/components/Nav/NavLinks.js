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
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#About'>About</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Projects'>Projects</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Technologies'>Technologies</Button>
        <Button sx={{ color: 'rgba(0,0,0,0.87)' }} href='#Contact'>Contact</Button>
    </Stack>
  );
}

export default NavLinks;