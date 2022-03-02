
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const Projects = () => {

  return (
    <div id="Projects"
    style={{
      padding: '2.5rem 5rem',
      width: '100vw',
      height: '100vh',
      marginTop: '5rem'
    }}
    >
    <Typography variant="h2">My Projects</Typography>
    <br />
    <Typography variant='h5'>Filter By: </Typography>
    <Stack direction="row" spacing={2}>
      <Button variant="contained">All</Button>
      <Button>Frontend</Button>
      <Button>Backend</Button>
      <Button>Research</Button>
    </Stack>
    {/* TODO: This is where our project cards will be rendered*/}
    </div>
  );
}

export default Projects;