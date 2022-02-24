import { Stack, Link } from '@mui/material';
import React from 'react';


const NavLinks = () => {



  return (
    <Stack direction="row" spacing={3}>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: '1.8rem'}} href='#'>About</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: '1.8rem'}} href='#'>Projects</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: '1.8rem'}} href='#'>Technologies</Link>
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', fontSize: '1.8rem'}} href='#'>Contact</Link>
    </Stack>
  );
}

export default NavLinks;