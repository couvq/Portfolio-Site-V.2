import React from "react";

import { Avatar, Button } from "@mui/material";

const AvatarButton = () => {
  return (
    <>
      <Button href="#">
        <Avatar
          alt="Quentin Couvelaire"
          src="/cosmoComposite19-20.jpg"
          styles={{ cursor: "pointer" }}
        />
      </Button>
    </>
  );
};

export default AvatarButton;
