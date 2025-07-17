import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        p: 6,
        borderRadius: 4,
        background: "linear-gradient(135deg, #e3f2fd, #90caf9)",
        boxShadow: 6,
        gap: 4,
        overflow: "hidden",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: 1 }}>
       <Typography
  variant="h3"
  sx={{
    fontWeight: 700,
    mb: 2,
    color: "white",
    fontSize: { xs: "2rem", md: "2.5rem" },
    textShadow: `
      1px 1px 0 #0d47a1
    `,
  }}
>
  Got a task? Get it done fast.
</Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: "1.1rem",
            color: "grey",
            maxWidth: 550,
  
          }}
        >
          Post any task – from small gigs to big projects – and let skilled job hunters pick it up.
          Save time, reduce stress, and get things done effortlessly.
        </Typography>
       <Button
  href="/post-task"
  variant="contained"
  size="large"
  sx={{
    mt: 6,
    borderRadius: "999px",
    px: 5,
    py: 1.7,
    fontWeight: 600,
    fontSize: "1rem",
    background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
    color: "#fff",
    boxShadow: "0 4px 14px rgba(33, 150, 243, 0.4)",
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      background: "linear-gradient(135deg, #1e88e5, #1565c0)",
      boxShadow: "0 6px 20px rgba(21, 101, 192, 0.5)",
      transform: "translateY(-2px)",
    },
  }}
>
  Post a Task
</Button>

      </Box>

      {/* Right Video Section */}
      <Box sx={{ flex: 1, maxWidth: 500 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          style={{ width: "100%", borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/6d44640ae60bba48efa315b0c206fad3-1750935806127/Vibe%20coding%20marketing%20banner%20loop"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default Banner;
