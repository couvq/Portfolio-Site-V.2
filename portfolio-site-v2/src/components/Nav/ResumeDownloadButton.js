import { Button } from "@mui/material";
import React from "react";

import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";

const ResumeDownloadButton = () => {
  return (
    
      <Button variant="contained" endIcon={<CloudDownloadSharpIcon />}>
      <a href="/QuentinCouvelaireResume.pdf" style={{ textDecoration: 'none', color: 'white'}} download>
        Download Resume
      </a>
      </Button>
  );
};

export default ResumeDownloadButton;
