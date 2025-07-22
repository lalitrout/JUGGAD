import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WorkIcon from "@mui/icons-material/Work";

const steps = [
  {
    icon: <AddCircleOutlineIcon fontSize="inherit" />,
    title: "Sign up",
    desc: "Create your account. Then download the Tasker app to continue registration.",
  },
  {
    icon: <AssignmentIndIcon fontSize="inherit" />,
    title: "Build your profile",
    desc: "Select what services you want to offer and where.",
  },
  {
    icon: <VerifiedUserIcon fontSize="inherit" />,
    title: "Verify your eligibility to task",
    desc: "Confirm your identity and submit business verifications, as required.",
  },
  {
    icon: <PaymentIcon fontSize="inherit" />,
    title: "Pay registration fee",
    desc: "In applicable cities, we charge a $25 registration fee that helps us provide the best service to you.",
  },
  {
    icon: <CalendarTodayIcon fontSize="inherit" />,
    title: "Set your schedule and work area",
    desc: "Set your weekly availability and opt in to receive same-day jobs.",
  },
  {
    icon: <WorkIcon fontSize="inherit" />,
    title: "Start getting jobs",
    desc: "Grow your business on your own terms.",
  },
];

const GettingStarted = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#fff", mt: 10,}}>
      <Container maxWidth="lg">
        <Typography
          variant={isSm ? "h5" : "h4"}
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{ color: "#274cb1ff" }}
        >
         Getting Started
        </Typography>

        <Grid container spacing={isSm ? 4 : 6} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                textAlign="center"
                px={isSm ? 2 : 3}
                py={isSm ? 2 : 4}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: isSm ? 40 : 50,
                    color: "#4f6bb8ff",
                    mb: 2,
                  }}
                >
                  {step.icon}
                </Box>

                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {`${index + 1}. ${step.title}`}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: isSm ? "0.9rem" : "1rem" }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GettingStarted;
