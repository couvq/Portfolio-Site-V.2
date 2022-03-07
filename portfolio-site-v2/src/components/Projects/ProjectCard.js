import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const ProjectCard = () => {


  return (
    <Card raised>
      <CardMedia image="https://source.unsplash.com/random" sx={{ width: '100%', height: '12rem' }} />
      <CardContent>
        <Typography variant='h4'>Title</Typography>
        <Typography>This is our description of our project</Typography>
      </CardContent>
      <CardActions>
        <Button>Live</Button>
        <Button>Code</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;