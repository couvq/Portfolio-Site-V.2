import { Stack, Link } from '@mui/material';
import React from 'react';

const NavLinks = () => {


  return (
    <Stack direction="row" spacing={2}>
        <Link href='#'>About</Link>
        <Link href='#'>Projects</Link>
        <Link href='#'>Technologies</Link>
        <Link href='#'>Contact</Link>
    </Stack>
  );
}

export default NavLinks;