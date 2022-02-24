import { Button } from '@mui/material';
import React from 'react';

import CloudDownloadSharpIcon from '@mui/icons-material/CloudDownloadSharp';

const ResumeDownloadButton = () => {


  return (
    <Button variant='contained' endIcon={<CloudDownloadSharpIcon />}>Download Resume</Button>
  );
}

export default ResumeDownloadButton;