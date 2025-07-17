import React from "react";
import { Box, Typography } from "@mui/material";

export default function Categories({ Icon, label }) {
  return (
    <Box
      sx={{
        width: 120,
        height: 120,
        bgcolor: "white",
        color: "black",
        border: "2px solid black",
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(173, 216, 230, 0.6)", // light blue shadow
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {Icon && <Icon sx={{ fontSize: 40, mb: 1 }} />}
      {label && (
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}
