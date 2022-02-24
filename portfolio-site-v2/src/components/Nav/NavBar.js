import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import ActionButtons from "./ActionButtons";

import AvatarButton from "./AvatarButton";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <>
      <AppBar color="transparent">
        <Toolbar>
          <AvatarButton />
          <NavLinks />
          <ActionButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
