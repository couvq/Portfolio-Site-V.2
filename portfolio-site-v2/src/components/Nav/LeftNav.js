import { Stack } from "@mui/material";
import React from "react";
import AvatarButton from "./AvatarButton";
import NavLinks from "./NavLinks";

const LeftNav = ({ language }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Stack direction="row" spacing={2} >
        <AvatarButton />
        <NavLinks language={language}/>
      </Stack>
    </div>
  );
};

export default LeftNav;
