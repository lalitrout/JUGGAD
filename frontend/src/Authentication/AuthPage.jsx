import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Authentication/Firebase";
import { useNavigate } from "react-router-dom";
import SocialAuthOptions from "../Authentication/SocialAuthOptions";
import Swal from "sweetalert2";
import useAuth from "../context/UseAuth.jsx";


const AuthPage = () => {
  const { setIsAuthenticated } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleEmailAuth = async () => {
    try {
      let res;
      if (isSignup) {
        res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signup Success", res.user);
        setIsAuthenticated(true);

        Swal.fire({
          icon: "success",
          title: "Signup Successful",
          text: `Welcome ${res.user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        res = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login Success", res.user);
        setIsAuthenticated(true);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${res.user.email}`,
          timer: 2000,
          showConfirmButton: false,
        });
      }

      const token = await res.user.getIdToken();

      const response = await fetch("http://localhost:5000/auth-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      console.log("Backend Auth Response:", data);

      if (data.isAuthenticated) {
        console.log("User verified at backend!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Email Auth Error:", error.message);
      setIsAuthenticated(false);
      
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: error.message,
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: "100%",
          maxWidth: "900px",
          height: { xs: "auto", md: "600px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {!isSmallScreen && (
          <Box sx={{ width: "50%", height: "100%" }}>
            <img
              alt="Auth Banner"
              src="https://images.unsplash.com/photo-1588545171508-df3a71e2c3d2?q=80&w=735&auto=format&fit=crop"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        )}

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#fff",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isSmallScreen ? "center" : "flex-start",
            textAlign: "left",
            width: { xs: "100%", md: "50%" },
            position: "relative",
            minHeight: isSmallScreen ? "70vh" : "auto",
          }}
        >
          <Box
            sx={{ position: "absolute", top: 24, left: 24, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
              <span
                style={{
                  background:
                    "linear-gradient(to right, #0d47a1,  #90caf9, #1976d2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JUGGAD
              </span>
            </Typography>
          </Box>

          <Box mb={2}>
            <Typography variant="h5" sx={{ fontWeight: 300 }}>
              {isSignup ? "Create a new account" : "Welcome Back"}
            </Typography>
            <Typography variant="body2">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <span
                    style={{ color: "#1976d2", cursor: "pointer" }}
                    onClick={() => setIsSignup(false)}
                  >
                    Login
                  </span>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <span
                    style={{ color: "#1976d2", cursor: "pointer" }}
                    onClick={() => setIsSignup(true)}
                  >
                    Signup
                  </span>
                </>
              )}
            </Typography>
          </Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 300, color: "#3d73a8ff", mb: 3 }}
          >
            <Typewriter
              words={[
                isSignup ? "Get your task done!" : "Get back to your tasks!",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </Typography>

          <Box sx={{ width: "100%", maxWidth: "300px", mb: 2 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" fullWidth onClick={handleEmailAuth}>
              {isSignup ? "Signup" : "Login"}
            </Button>
          </Box>

          <Box sx={{ width: "100%", maxWidth: "300px" }}>
            <Typography
              variant="body2"
              sx={{ mt: 2, mb: 1, textAlign: "center", fontWeight: 500 }}
            >
              Or continue with
            </Typography>
            <SocialAuthOptions isSignup={isSignup} />
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AuthPage;
