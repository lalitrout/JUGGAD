// AuthPage.jsx
import React from "react";
import { Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import AuthImage from "./AuthImage";
import AuthContent from "./AuthContent";
import useSessionRedirect from "./useSessionRedirect";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  useSessionRedirect(navigate);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: "900px",
          height: { xs: "auto", md: "600px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {!isSmallScreen && <AuthImage />}
        <AuthContent />
      </Paper>
    </Box>
  );
};

export default AuthPage;
