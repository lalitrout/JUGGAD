import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SkillCommunityCard = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f0f4ff, #e3f2fd)",
        borderRadius: 4,
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 6 },
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.08)",
        textAlign: "center",
        // my: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ color: "#0D47A1" }}
        >
          Join our growing community of helpers
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            color: "#37474F",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Whether you've helped once or many times — every skill counts in
          changing lives.
        </Typography>

        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 600, color: "#1976D2" }}
        >
          What’s your way to help?
        </Typography>
        <Link to="/member" style={{ textDecoration: "none" }}>
          <Button
            onClick={handleJoinClick}
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.95rem",
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
            Start Helping
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default SkillCommunityCard;
