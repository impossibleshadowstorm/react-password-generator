import React, { useState } from "react";
import {
  Box,
  Slider,
  Typography,
  FormControl,
  Input,
  Checkbox,
} from "@mui/material";
// import RangeSlider from "./components/rangeslider";
import RadioStyle from "./components/radio";
import Generate from "./components/generetorsec";

function App() {
  const [value, setValue] = useState(20);

  const changeValue = (event, value) => {
    setValue(value);
    console.log(value);
  };

  const [containDigit, setContainDigit] = useState(false);
  const handleDigitChange = (event) => {
    if (event.target.checked) {
      setContainDigit((current) => !current);
    } else {
      setContainDigit((current) => !current);
    }
  };

  const [containCapitals, setContainCapitals] = useState(false);
  const handleCapitalsChange = (event) => {
    if (event.target.checked) {
      setContainCapitals((current) => !current);
    } else {
      setContainCapitals((current) => !current);
    }
  };

  const [containSymbol, setContainSymbol] = useState(false);

  const handleSymbolChange = (event) => {
    if (event.target.checked) {
      setContainSymbol((current) => !current);
    } else {
      setContainSymbol((current) => !current);
    }
  };

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
          border: "1px solid gray",
          boxShadow: "5px 10px 20px #8888",
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
          <RadioStyle />
          <Box
            sx={{
              height: "40px",
              width: "100%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                paddingLeft: "10px",
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                Length
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
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <Input disabled value={value} />
              </FormControl>
            </Box>
          </Box>
          {/*Digits  */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                paddingLeft: "10px",
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                Digits
              </Typography>
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            >
              <Checkbox
                defaultChecked
                onChange={handleDigitChange}
                value={containDigit}
              />
            </Box>
          </Box>
          {/* Capitals */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                paddingLeft: "10px",
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                Capitals
              </Typography>
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            >
              <Checkbox
                defaultChecked
                onChange={handleCapitalsChange}
                value={containCapitals}
              />
            </Box>
          </Box>
          {/* Symbols */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                paddingLeft: "10px",
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                sx={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                Symbols
              </Typography>
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                justifyContent: "center",
              }}
            >
              <Checkbox
                defaultChecked
                onChange={handleSymbolChange}
                value={containSymbol}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "calc(40vh - 100px)",
            width: "calc(30vw - 40px)",
            borderRadius: " 0px 0px 5px 5px",
            padding: "40px 20px 20px 20px",
          }}
        >
          <Generate />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
