import React from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import useAuth from "../../context/UseAuth";

const steps = [
  {
    number: "1",
    text: "Choose a Tasker by price, skills, and reviews.",
    bgColor: "#dcd6f7",
  },
  {
    number: "2",
    text: "Schedule a Tasker as early as today.",
    bgColor: "#fff9c4",
  },
  {
    number: "3",
    text: "Chat, pay, tip, and review all in one place.",
    bgColor: "#c8e6c9",
  },
];

const HowItWorks = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Box
      sx={{
        borderRadius: 5,
        backgroundColor: "#aac2eaff",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 6, sm: 8 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Right: Image */}
        <Grid container>
          <Grid item xs={12}>
            <Box
              component="img"
              src="https://images.ctfassets.net/vwt5n1ljn95x/68OY5vAHQdG6blVvXM1WT7/5f45c9eda06d29820a9836a11232ef16/how_it_works_pic_updated.jpg?w=1920&q=75&fm=webp"
              alt="Image of lady booking a task"
              sx={{
                width: "100%",
                borderRadius: "24px",
                objectFit: "cover",
                height: { xs: 250, sm: 300, md: 380 },
                ml: { md: 5, lg: 35 },
              }}
            />
          </Grid>
        </Grid>

        {/* Left: Overlapping Card */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(-10%, -50%)",
            zIndex: 2,
            width: { xs: "45%", sm: "65%", md: "50%" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "24px",
              p: { xs: 2, sm: 3, md: 4 },
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: "#1138a1ff",
                fontSize: { xs: "0.9rem", sm: "1.4rem", md: "1.6rem" },
              }}
            >
              How it works
            </Typography>
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: step.bgColor,
                    color: "#000",
                    mr: 2,
                    fontWeight: "bold",
                    width: 28,
                    height: 28,
                    fontSize: "0.9rem",
                  }}
                >
                  {step.number}
                </Avatar>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#212121",
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            ))}
            {/* <Button
              href={!isAuthenticated ? "/auth" : "/member"}
              variant="contained"
              size="small"
              sx={{
                px: 4,
                py: 1,
                borderRadius: "999px",
                fontWeight: 400,
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
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
