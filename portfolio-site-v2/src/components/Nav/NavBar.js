import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import ActionButtons from "./ActionButtons";
import LeftNav from "./LeftNav";


const NavBar = () => {
  return (
    <>
      <AppBar 
      color="background"
      style={{ zIndex: 1 }}
      sx={{ width: '100%'}}
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
