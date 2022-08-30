import React from "react";
import {
  Stack,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import RefreshIcon from "@mui/icons-material/Refresh";

const Generate = () => {
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Password</InputLabel>
        <Input disabled
          startAdornment={
            <InputAdornment position="end">
              <KeyIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <RefreshIcon sx={{ cursor: "pointer" }}></RefreshIcon>
            </InputAdornment>
          }
        />
      </FormControl>
      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "135px",
            color: "gray",
            borderColor: "gray",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Copy
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#788792",
            "&:hover": {
              backgroundColor: "#788792",
            },
          }}
        >
          Use Password
        </Button>
      </Stack>
    </>
  );
};

export default Generate;
