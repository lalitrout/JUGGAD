import React, { useState } from "react";
import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <TextField
        variant="outlined"
        placeholder='Wanna help? search Tasks...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: {
            xs: "90%",
            sm: "400px",
            md: "500px",
          },
          bgcolor: "white",
          borderRadius: "50px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            color: "black",
            "& fieldset": {
              borderColor: "#1976d2", 
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#1565c0", 
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0d47a1",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{
                  color: "white",
                  bgcolor: "#1976d2",
                  "&:hover": {
                    bgcolor: "#1565c0",
                  },
                  borderRadius: "50%",
                  p: 1,
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
