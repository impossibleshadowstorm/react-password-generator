import React from "react";
import { Box } from "@mui/material";
import Slider from "./components/slider";
import RadioStyle from "./components/radio";
import Generate from "./components/generetorsec";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#dbebf7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "80vh",
          width: "30vw",
          backgroundColor: "white",
          borderRadius: "5px",
          border: "1px solid gray",
          boxShadow:"5px 10px 20px #8888"
        }}
      >
        <Box
          sx={{
            height: "50vh",
            width: "calc(30vw - 40px)",
            backgroundColor: "cyan",
            borderRadius: "5px 5px 0px 0px",
            padding:"20px"
          }}
        > <RadioStyle/>
        <Slider /></Box>
        <Box
          sx={{
            height: "calc(40vh - 100px)",
            width: "calc(30vw - 40px)",
            // backgroundColor: "pink",
            borderRadius: " 0px 0px 5px 5px",
            padding:"40px 20px 20px 20px"

          }}
        ><Generate/></Box>
       
      </Box>
    </Box>
  );
}

export default App;
