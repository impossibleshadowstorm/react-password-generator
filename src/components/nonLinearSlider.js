// import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// import { Slider, Typography } from "@mui/material";

// // const useStyles = makeStyles({
// //   root: {
// //     width: 300,
// //   },
// // });

// function valuetext(value) {
//   return `${value}°C`;
// }

// let beforeChange = null;

// export default function RangeSlider() {
//   //   const classes = useStyles();
//   const [value, setValue] = React.useState([20]);

//   const handleChange = (event, newValue) => {
//     if (!beforeChange) {
//       beforeChange = [...value];
//     }

//     if (beforeChange[0] !== newValue[0] && beforeChange[1] !== newValue[1]) {
//       return;
//     }

//     setValue(newValue);
//   };

//   const handleChangeCommitted = () => {
//     beforeChange = null;
//   };

//   return (
//     <div style={{ width: "300px" }}>
//       <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         onChangeCommitted={handleChangeCommitted}
//         valueLabelDisplay="auto"
//         color="secondary"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       />
//       {/* <Slider
//         aria-label="Temperature"
//         defaultValue={30}
//         getAriaValueText={valuetext}
//         color="secondary"
//       /> */}
//     </div>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(number) {
  return `${number}°C`;
}

export default function ColorSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        color="red"
        defaultValue={30}
        getAriaValueText={valuetext}
        // color="secondary"
      />
    </Box>
  );
}