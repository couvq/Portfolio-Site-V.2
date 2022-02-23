import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Avatar from '@material-ui/core/Avatar';

const NavBar = () => {

  return (
    <AppBar color="transparent">
        <Toolbar>
            
                <Stack direction="row" spacing={2}>
                <Avatar src="/portfolio-site-v2/public/cosmoComposite19-20.jpg" alt="Quentin Couvelaire" />
                </Stack>
            

            <Stack direction="row" spacing={2} sx={{ flexGrow: 1, marginLeft: '2rem'}}>
                <Button>About</Button>
                <Button>Projects</Button>
                <Button>Technologies</Button>
                <Button>Contact</Button>
            </Stack>

            <Stack direction="row" spacing={1}>
            <FormControl>
                <Select
                value={'En'}
                >
                    <MenuItem value='En'>En</MenuItem>
                    <MenuItem value='Fr'>Fr</MenuItem>
                </Select>
            </FormControl>
                <Button variant='contained'>Download Resume</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;