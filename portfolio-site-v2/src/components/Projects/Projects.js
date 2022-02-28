
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

import ProjectList from './ProjectList';

const Projects = () => {

  return (
    <div id="Projects"
    style={{
      padding: '2.5rem 5rem'
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
    <ProjectList />
    </div>
  );
}

export default Projects;