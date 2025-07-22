import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../../context/UseAuth";

const VideoHero = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleGetStarted = () => {
    navigate("/post-task");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "65vh", md: "70vh" },
        overflow: "visible", // allow overlap
        color: "#fff",
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
          height: "100%",
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
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
          zIndex: 1,
        }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={600}
          sx={{ mb: 2, maxWidth: 800 }}
        >
          Lend a Hand, Change a Life
        </Typography>

        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ maxWidth: 600, mb: 4, color: "#e0e0e0" }}
        >
          Whether it’s babysitting, tech help, or errands — help your neighbors
          and build a stronger community.
        </Typography>

        <Button
          href={ !isAuthenticated? "/auth" : "/member"}
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: "999px",
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
          Join Us
        </Button>
      </Box>

      {/* ⬇️ Stats Overlapping Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          width: "90%",
          maxWidth: 800,
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            background:
              "linear-gradient(135deg, rgba(33,150,243,0.9), rgba(30,136,229,0.9))",
            borderRadius: 3,
            px: { xs: 2, sm: 4 },
            py: { xs: 2.5, sm: 3.5 },
            boxShadow: "0 8px 30px rgba(21, 101, 192, 0.45)",
            backdropFilter: "blur(6px)",
            color: "#ffffff",
          }}
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
