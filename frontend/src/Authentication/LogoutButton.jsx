import React from 'react';
import { Button } from '@mui/material';
import useAuth from '../context/UseAuth.jsx'; 

const LogoutButton = () => {
  const { setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include', // include cookies in the request
      });

      if (res.ok) {
        setIsAuthenticated(false);
        console.log(" Logged out successfully");
      } else {
        console.error(" Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Button onClick={handleLogout} color="secondary" variant="contained">
      Logout
    </Button>
  );
};

export default LogoutButton;
