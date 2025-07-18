import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { signInWithPopup, getIdToken } from "firebase/auth";
import { auth, googleProvider } from "../Authentication/Firebase";
import useAuth from "../context/UseAuth.jsx";

const SocialAuthOptions = ({ isSignup }) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(`${isSignup ? "Signup" : "Login"} Success:`, result.user);

      const token = await getIdToken(result.user);

      const response = await fetch("http://localhost:5000/auth-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "include",
      });

      const data = await response.json();
      console.log("Backend Auth Response:", data);

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        Swal.fire({
          icon: "success",
          title: `${isSignup ? "Signup" : "Login"} Successful`,
          html: `<b>Welcome ${
            result.user.displayName || result.user.email
          }</b>`,
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      console.error("Google Auth Error:", error.message);
      setIsAuthenticated(false);
      Swal.fire({
        icon: "error",
        title: "Authentication Failed",
        text: error.message,
      });
    }
  };

  return (
    <Button
      onClick={handleGoogleAuth}
      variant="outlined"
      sx={{ width: "100%", maxWidth: "300px", mb: 1 }}
    >
      <svg
        width="20"
        height="16"
        viewBox="0 0 18 19"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 8 }}
      >
        <path
          d="M9 7.844v3.463h4.844a4.107 4.107 0 0 1-1.795 2.7v2.246h2.907c1.704-1.558 2.685-3.85 2.685-6.575 0-.633-.056-1.246-.162-1.83H9v-.004Z"
          fill="#3E82F1"
        ></path>
        <path
          d="M9 14.861c-2.346 0-4.328-1.573-5.036-3.69H.956v2.323A9.008 9.008 0 0 0 9 18.42c2.432 0 4.47-.8 5.956-2.167l-2.907-2.247c-.804.538-1.835.855-3.049.855Z"
          fill="#32A753"
        ></path>
        <path
          d="M3.964 5.456H.956a8.928 8.928 0 0 0 0 8.033l3.008-2.318a5.3 5.3 0 0 1-.283-1.699 5.3 5.3 0 0 1 .283-1.699V5.456Z"
          fill="#F9BB00"
        ></path>
        <path
          d="m.956 5.456 3.008 2.317c.708-2.116 2.69-3.69 5.036-3.69 1.32 0 2.508.453 3.438 1.338l2.584-2.569C13.465 1.41 11.427.525 9 .525A9.003 9.003 0 0 0 .956 5.456Z"
          fill="#E74133"
        ></path>
      </svg>
      {isSignup ? "Sign up with Google" : "Login with Google"}
    </Button>
  );
};

export default SocialAuthOptions;
