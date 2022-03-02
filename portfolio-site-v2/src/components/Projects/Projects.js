import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState("All"); // either 'All', 'Personal', 'Work', or 'Research'

  return (
    <div
      id="Projects"
      style={{
        padding: "2.5rem 5rem",
        width: "100vw",
        height: "100vh",
        marginTop: "5rem",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h2">My Projects</Typography>
      <br />
      <Typography variant="h5">Filter By: </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant={active === "All" ? "contained" : ""}
          onClick={() => {
            setActive("All");
          }}
        >
          All
        </Button>
        <Button
          variant={active === "Personal" ? "contained" : ""}
          onClick={() => {
            setActive("Personal");
          }}
        >
          Personal
        </Button>
        <Button
          variant={active === "Work" ? "contained" : ""}
          onClick={() => {
            setActive("Work");
          }}
        >
          Work
        </Button>
        <Button
          variant={active === "Research" ? "contained" : ""}
          onClick={() => {
            setActive("Research");
          }}
        >
          Research
        </Button>
      </Stack>
      {/* TODO: This is where our project cards will be rendered*/}
    </div>
  );
};

export default Projects;
