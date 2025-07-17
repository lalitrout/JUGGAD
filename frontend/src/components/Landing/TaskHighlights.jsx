import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import useAuth from "../../context/UseAuth.jsx";


const features = [
  {
    title: "Find the Right Talent for Any Task",
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/categories.8badf97.svg",
    alt: "Access a pool of top talent across 700 categories",
  },
  {
    title: "Simple Matching Process",
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/matching.0eef7cc.svg",
    alt: "Easy-to-use matching experience",
  },
  {
    title: "Fast & Budget-Friendly",
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/quickly.6879514.svg",
    alt: "Get quality work done quickly and within budget",
  },
  {
    title: "Pay Only When You're Satisfied",
    img: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/happy.42ed7bd.svg",
    alt: "Only pay when you’re happy",
  },
];

const TaskHighlights = () => {
      const { isAuthenticated } = useAuth();

  return (
    <Box
      sx={{
        mt: 4,
        py: 8,
        px: 4,
        bgcolor: "#f0f4ff",
        textAlign: "center",
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 6,
          color: "#0d47a1",
          textShadow: "-0.5px -0.5px 0 #90caf9",
        }}
      >
        Get Anything Done by Trusted Taskers
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ px: 2 }}>
              <img
                src={feature.img}
                alt={feature.alt}
                style={{ width: 64, height: 64, marginBottom: 16 }}
              />
              <Typography variant="body1" sx={{ fontWeight: 500, color: "#1a237e" }}>
                {feature.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

     <Button
  href= {isAuthenticated ? "/explore" : "/auth"}

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
  {isAuthenticated ? `Explore` : "Join Now"}
</Button>

    </Box>
  );
};

export default TaskHighlights;
