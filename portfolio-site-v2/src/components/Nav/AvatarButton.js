import React from "react";

import { Avatar, Button } from "@mui/material";

const AvatarButton = () => {
  return (
    <>
      <Button>
        <Avatar
          alt="Quentin Couvelaire"
          src="/portfolio-site-v2/public/cosmoComposite19-20.jpg"
          styles={{ cursor: "pointer" }}
        />
      </Button>
    </>
  );
};

export default AvatarButton;
