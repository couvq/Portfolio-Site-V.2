import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import { useState, useEffect } from "react";

const data = {
  En: ["My Projects", "Filter By:", "All", "Personal", "Work", "Research"],
  Fr: ["Mes projets", "Filtrer par:", "Tout", "Personnel", "Travailler", "Recherche"]
};

const Projects = ({ language }) => {
  const [active, setActive] = useState("All"); // either 'All', 'Personal', 'Work', or 'Research'
  const [nonProjectCardText, changeNonProjectCardText] = useState([
    data.En[0],
    data.En[1],
    data.En[2],
    data.En[3],
    data.En[4],
    data.En[5],
  ]);

  const changeNonProjectCardTextOnLanguageChange = () => {
    if (language === 'En') {
      changeNonProjectCardText([
        data.En[0],
        data.En[1],
        data.En[2],
        data.En[3],
        data.En[4],
        data.En[5],
      ]);
      return;
    }
    changeNonProjectCardText([
      data.Fr[0],
      data.Fr[1],
      data.Fr[2],
      data.Fr[3],
      data.Fr[4],
      data.Fr[5],
    ]);
    
  };

  // change textdata if language changes
  useEffect(() => {
    changeNonProjectCardTextOnLanguageChange();
  }, [language]);

  return (
    <div
      id="Projects"
      style={{
        padding: "2.5rem 5rem",
        width: "100vw",
        height: "100vh",
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">{nonProjectCardText[0]}</Typography>
      <br />
      <br />
      <Typography variant="h5">{nonProjectCardText[1]}</Typography>
      <br />
      <Stack direction="row" spacing={2}>
        <Button
          sx={active === "All" ? { color: "#fff" } : ""}
          variant={active === "All" ? "contained" : ""}
          onClick={() => {
            setActive("All");
          }}
        >
         {nonProjectCardText[2]}
        </Button>
        <Button
          sx={active === "Personal" ? { color: "#fff" } : ""}
          variant={active === "Personal" ? "contained" : ""}
          onClick={() => {
            setActive("Personal");
          }}
        >
          {nonProjectCardText[3]}
        </Button>
        <Button
          sx={active === "Work" ? { color: "#fff" } : ""}
          variant={active === "Work" ? "contained" : ""}
          onClick={() => {
            setActive("Work");
          }}
        >
          {nonProjectCardText[4]}
        </Button>
        <Button
          sx={active === "Research" ? { color: "#fff" } : ""}
          variant={active === "Research" ? "contained" : ""}
          onClick={() => {
            setActive("Research");
          }}
        >
          {nonProjectCardText[5]}
        </Button>
      </Stack>
      {/* TODO: This is where our project cards will be rendered*/}
    </div>
  );
};

export default Projects;
