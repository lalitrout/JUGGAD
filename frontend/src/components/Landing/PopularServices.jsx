import React from "react";
import { Box, Typography } from "@mui/material";

export default function PopularServices({ label, src }) {
  return (
    <Box
      sx={{
        minWidth: 240,
        maxWidth: 240,
        bgcolor: "rgba(74, 144, 226, 0.85)",
        border: "1px solid #90caf9",
        borderRadius: 2,
        overflow: "hidden",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(173, 216, 230, 0.3)",
        mx: 1,
        cursor: "pointer",
        transition: "transform 0.2s",
        position: "relative",
        "&:hover": {
          transform: "translateY(-4px)",
          "& .labelBox": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={src}
        alt={label}
        sx={{
          width: "100%",
          height: 400,
          objectFit: "cover",
          backgroundColor: "#e3f2fd",
        }}
      />

      {/* Hidden Label (appears on hover) */}
      <Box
        className="labelBox"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(74, 144, 226, 0.85)",
          color: "#fff",
          opacity: 0,
          transform: "translateY(100%)",
          transition: "all 0.3s ease",
          p: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: "0.9rem", textAlign: "center" }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}
