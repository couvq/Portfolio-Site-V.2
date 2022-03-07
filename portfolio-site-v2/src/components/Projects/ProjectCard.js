import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const ProjectCard = () => {


  return (
    <Card raised>
      <CardMedia src='/cosmoComposite19-20.jpg'>
      <CardContent>
        <Typography variant='h4'>Title</Typography>
        <Typography>This is our description of our project</Typography>
      </CardContent>
      <CardActions>
        <Button>Live</Button>
        <Button>Code</Button>
      </CardActions>
      </CardMedia>
    </Card>
  );
}

export default ProjectCard;