import React from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

const RadioStyle = () => {
  return (
    <RadioGroup sx={{display:"flex", justifyContent: "center",
    alignItems: "center",}}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Characters" />
      <FormControlLabel value="male" control={<Radio />} label="Words" />
    </RadioGroup>
  );
};
export default RadioStyle;
