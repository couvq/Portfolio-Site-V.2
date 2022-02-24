import { Stack } from "@mui/material";
import React from "react";
import AvatarButton from "./AvatarButton";
import NavLinks from "./NavLinks";

const LeftNav = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Stack>
        <AvatarButton />
        <NavLinks />
      </Stack>
    </div>
  );
};

export default LeftNav;
