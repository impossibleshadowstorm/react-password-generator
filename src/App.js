import React from "react";
import { Box } from "@mui/material";
import Slider from "./components/slider";

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw", backgroundColor: "red" }}>
      <Box
        sx={{ height: "80vh", width: "30vw", backgroundColor: "yellow", padding:"20px" }}
      >
        <Slider />
      </Box>
    </Box>
  );
}

export default App;
