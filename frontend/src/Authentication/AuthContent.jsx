import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "./Firebase";
import Swal from "sweetalert2";
import useAuth from "../context/UseAuth";
import { useNavigate } from "react-router-dom";

const AuthContent = () => {
  const { setIsAuthenticated } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // 🔧 Store user data in Firestore if not already
  const storeUserInfoIfNew = async (user, additionalInfo = {}) => {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || additionalInfo.displayName || "",
        email: user.email,
        phone: user.phoneNumber || "",
        isMember: false,
        roles: [],
        createdAt: new Date(),
        ...additionalInfo,
      });
      console.log("User info stored in Firestore");
    }
  };

  // 🔐 Email/password login/signup
  const handleEmailAuth = async () => {
    try {
      const res = isSignup
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      const user = res.user;

      if (isSignup) {
        const name = email.split("@")[0]; // Basic name from email
        await updateProfile(user, { displayName: name });
        await storeUserInfoIfNew(user, { displayName: name });
      } else {
        await storeUserInfoIfNew(user);
      }

      Swal.fire({
        icon: "success",
        title: `${isSignup ? "Signup" : "Login"} Successful`,
        text: `Welcome ${user.email}`,
        timer: 2000,
        showConfirmButton: false,
      });

      setIsAuthenticated(true);

      const token = await user.getIdToken();
      const response = await fetch("http://localhost:5000/auth-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include",
      });

      const data = await response.json();
      if (data.isAuthenticated) navigate("/");
    } catch (error) {
      setIsAuthenticated(false);
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: error.message,
      });
    }
  };

  // 🔐 Google login
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await storeUserInfoIfNew(user); // Firestore write

      const token = await getIdToken(user);
      const response = await fetch("http://localhost:5000/auth-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include",
      });

      const data = await response.json();

      if (data.isAuthenticated) {
        setIsAuthenticated(true);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          html: `<b>Welcome ${user.displayName || user.email}</b>`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      setIsAuthenticated(false);
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: error.message,
      });
    }
  };

  return (
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
      {/* Heading Section */}
      <Box mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 400, color: "#2373c4ff" }}>
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
      {/* Typewriter Effect */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 300, color: "#3d73a8ff", mb: 3 }}
      >
        <Typewriter
          words={[isSignup ? "Get your task done!" : "Get back to your tasks!"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </Typography>
      {/* Email/Password Form */}
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
      {/* Google Auth */}
      <Box sx={{ width: "100%", maxWidth: "300px" }}>
       <Box
  sx={{
    display: "flex",
    alignItems: "center",
    width: "100%",
    my: 2,
  }}
>
  <Box
    sx={{
      flex: 1,
      height: "1px",
      backgroundColor: "#888", // Darker grey for visibility
      mx: 1,
    }}
  />
  <Typography
    variant="body2"
    sx={{
      color: "#666", // Slightly dark text
      fontWeight: 500,
      whiteSpace: "nowrap",
    }}
  >
    Or
  </Typography>
  <Box
    sx={{
      flex: 1,
      height: "1px",
      backgroundColor: "#888",
      mx: 1,
    }}
  />
</Box>

        <Button
          onClick={handleGoogleAuth}
          variant="outlined"
          sx={{ width: "100%", maxWidth: "300px", mb: 1 }}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            width="20"
            style={{ marginRight: 8 }}
          />
          {isSignup ? "Sign up with Google" : "Login with Google"}
        </Button>
      </Box>
      <Typography variant="body2" mt={2}>
        Join us as a{" "}
        <Link
          href="http://localhost:5173/member"
          underline="hover"
          sx={{ fontWeight: 500, color: "primary.main" }}
        >
          Member
        </Link>
      </Typography>
    </Grid>
  );
};

export default AuthContent;
