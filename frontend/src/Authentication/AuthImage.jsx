import React from "react";
import { Box } from "@mui/material";

const AuthImage = () => (
  <Box
    sx={{
      width: "45%", // Smaller width to give more space to form
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: { xs: "none", md: "block" },
    }}
  >
    <Box
      component="img"
      alt="Auth Banner"
      src="https://images.unsplash.com/photo-1588545171508-df3a71e2c3d2?q=80&w=735&auto=format&fit=crop"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
      }}
    />
  </Box>
);

export default AuthImage;
