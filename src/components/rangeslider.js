import React, { useState, useEffect } from "react";
import {
  Box,
  Slider,
  Typography,
  FormControl,
  Input,
} from "@mui/material";

const RangeSlider = (props) => {
  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <Box
      sx={{
        height: "40px",
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "55%",
          marginLeft: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slider
          defaultValue={15}
          size="medium"
          sx={{ color: "#868380" }}
          value={value}
          onChange={changeValue}
        />
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl
          variant="standard"
          sx={{ width: "50%" }}
        >
          <Input
            disabled
            value={value}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default RangeSlider;
