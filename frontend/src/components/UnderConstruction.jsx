import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        background:
          "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        color: "skyblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Box
        sx={{
          animation: "spin 3s linear infinite",
          "@keyframes spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
          mb: 2,
        }}
      >
        <ConstructionIcon sx={{ fontSize: 100, color: "#ffeb3b" }} />
      </Box>

      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
        Page Under Construction
      </Typography>

      <Typography variant="h6" sx={{ mb: 4, maxWidth: "500px" }}>
        We're working hard to bring this page to life. Please check back soon!
      </Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        sx={{
          background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
          borderRadius: "30px",
          px: 4,
          py: 1.5,
          fontWeight: 600,
          fontSize: "1rem",
          boxShadow: "0 4px 14px rgba(33, 150, 243, 0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #1e88e5, #1565c0)",
            boxShadow: "0 6px 20px rgba(21, 101, 192, 0.5)",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default UnderConstruction;
