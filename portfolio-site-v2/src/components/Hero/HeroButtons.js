import { Button, Stack } from '@mui/material';
import React from 'react';

const HeroButtons = () => {


  return (
    <Stack direction="row" spacing={2} sx={{ marginTop: '1.5rem'}}>
        <Button variant="contained" size='large'>See My Work</Button>
        <Button variant="outlined" size='large'>About Me</Button>
    </Stack>
  );
}

export default HeroButtons;