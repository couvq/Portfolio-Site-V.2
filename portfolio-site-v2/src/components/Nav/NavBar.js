import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import ActionButtons from "./ActionButtons";
import LeftNav from "./LeftNav";


const NavBar = () => {
  return (
    <>
      <AppBar 
      color="transparent"
      position="sticky"
      >
        <Toolbar>
          <LeftNav />
          <ActionButtons />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
