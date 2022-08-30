import React from "react";
import { Box } from "@mui/material";
import Slider from "./components/slider";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "30vw",
          backgroundColor: "yellow",
          borderRadius: "5px",
          border: "1px solid black",
        }}
      >
        <Box
          sx={{
            height: "50vh",
            width: "30vw",
            backgroundColor: "cyan",
            borderRadius: "5px 5px 0px 0px",
            padding:"20px"
          }}
        > <Slider /></Box>
        <Box
          sx={{
            height: "30vh",
            width: "30vw",
            backgroundColor: "pink",
            borderRadius: " 0px 0px 5px 5px",
          }}
        ></Box>
       
      </Box>
    </Box>
  );
}

export default App;
