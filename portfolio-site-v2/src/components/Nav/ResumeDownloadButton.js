import { Button } from "@mui/material";
import React from "react";

import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";

const ResumeDownloadButton = () => {
  return (
    <a
      href="/QuentinCouvelaireResume.pdf"
      style={{ textDecoration: "none", color: "#fff", }}
      download
    >
      <Button
        variant="contained"
        startIcon={<CloudDownloadSharpIcon sx={{ color: "#fff" }} />}
        sx={{ color: '#fff'}}
        size="medium"
      >
        Resume
      </Button>
    </a>
  );
};

export default ResumeDownloadButton;
