import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const VideoHero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/post-task"); // or '/services' or your actual route
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        preload="auto"
        poster="//assetsv2.fiverrcdn.com/assets/v2_photos/packages-lp/bg-first-hero-d92a52e389008a9c36e1cb59634ae244.jpg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "60%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4"
          type="video/mp4"
        />
        <source
          src="https://sg.fiverrcdn.com/packages_lp/cover_video.webm"
          type="video/webm"
        />
        <source
          src="https://sg.fiverrcdn.com/packages_lp/cover_video.ogv"
          type="video/ogv"
        />
        Your browser does not support the video tag.
      </Box>

      {/* Overlay Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 400 }} className="fade-in">
          Lend a Hand, Change a Life
        </Typography>

        <Typography
          variant="h6"
          sx={{ mt: 2, maxWidth: 600 }}
          className="fade-in"
        >
          Whether it’s babysitting, tech help, or just errands — help your
          neighbors and build a stronger community.
        </Typography>

        <Button
          href="/auth"
          variant="contained"
          size="large"
          sx={{
            mt: 1,
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "0.8rem",
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
            Explore
        </Button>

        {/* Stats Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            mt: 6,
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: 2,
            px: 4,
            py: 2,
            maxWidth: 700,
          }}
          className="fade-in"
        >
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body1">Help Offered Every</Typography>
            <Typography variant="h6" fontWeight="bold">
              5 Seconds
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body1">Community Members</Typography>
            <Typography variant="h6" fontWeight="bold">
              80K+
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body1">Support Value</Typography>
            <Typography variant="h6" fontWeight="bold">
              $0 - $5000+
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VideoHero;
