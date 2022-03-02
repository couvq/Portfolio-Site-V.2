import { Button, Stack } from '@mui/material';
import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';



const AboutSocialLinks = () => {


  return (
    <Stack direction='row' spacing={2} sx={{ 
      marginTop: '2rem'
    }} >
        <Button variant="contained" href="https://www.linkedin.com/in/quentin-couvelaire-2a08431b9"><LinkedInIcon sx={{ color: "#fff"}} /></Button>
        <Button variant="contained" href="https://github.com/couvq"><GitHubIcon sx={{ color: "#fff" }} /></Button>
        <Button variant="contained" href="https://www.instagram.com/the.real.qc/"><InstagramIcon sx={{ color: "#fff" }} /></Button>
    </Stack>
  );
}

export default AboutSocialLinks;