import React from "react";
import { Box } from "@mui/material";
import Slider from "./components/rangeslider";
import NonLinearSlider from "./components/nonLinearSlider";
import RangeSlider from "./components/rangeslider";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#DBEBF7",
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
          border: "1px solid black",
        }}
      >
        <Box
          sx={{
            height: "50vh",
            width: "calc(30vw - 40px)",
            backgroundColor: "#F7F5F7",
            borderRadius: "5px 5px 0px 0px",
            padding: "20px",
          }}
        >
          <RangeSlider title="Length" />
        </Box>
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
