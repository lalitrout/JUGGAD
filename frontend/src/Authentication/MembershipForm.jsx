import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useMember } from "../context/MemberContext";
import useAuth from "../context/UseAuth"; // ✅ your custom hook

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    age: "",
    gender: "",
    aadhar: "",
  });

  const navigate = useNavigate();
  const theme = useTheme();
  const { isAuthenticated } = useAuth(); // ✅ use isAuthenticated directly
  const { setIsMember } = useMember();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "Authentication Required",
        text: "Please login or sign up first.",
        confirmButtonColor: "#1565c0",
      }).then(() => navigate("/auth"));
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/membership", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setIsMember(true);
      Swal.fire({
        icon: "success",
        title: "Membership Confirmed!",
        confirmButtonColor: "#1565c0",
      }).then(() => navigate("/dashboard"));
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: data.message || "Something went wrong.",
        confirmButtonColor: "#1565c0",
      });
    }
  };

  // 🛑 Don't render the form if not authenticated
  if (!isAuthenticated) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        px: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: "#e3f2fd",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#1565c0",
            textAlign: "center",
          }}
        >
          Membership Verification
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Location"
            name="location"
            fullWidth
            value={formData.location}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{ bgcolor: "#ffffff" }}
          />

          <TextField
            label="Age"
            name="age"
            type="number"
            fullWidth
            value={formData.age}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{ bgcolor: "#ffffff" }}
          />

          <TextField
            label="Gender"
            name="gender"
            select
            fullWidth
            value={formData.gender}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{ bgcolor: "#ffffff" }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            label="Aadhar Number"
            name="aadhar"
            fullWidth
            value={formData.aadhar}
            onChange={handleChange}
            margin="normal"
            required
            variant="outlined"
            sx={{ bgcolor: "#ffffff" }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: "#1565c0",
              "&:hover": { backgroundColor: "#0d47a1" },
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Become a Member
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MembershipForm;
