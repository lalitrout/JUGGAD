import React from "react";
import { Box, Typography } from "@mui/material";
import PopularServices from "./PopularServices";

export default function Services() {
  const categories = [
    { label: "Babysitting", src: "https://images.unsplash.com/photo-1645818985771-be09e22cdef1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Pet Sitting & Dog Walking", src: "https://images.unsplash.com/photo-1672477669749-92b77e03f632?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Home Cleaning", src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Grocery Pickup", src: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Tutoring & Homework Help", src: "https://plus.unsplash.com/premium_photo-1661962988901-3ae08e74a76c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Furniture Assembly", src: "https://plus.unsplash.com/premium_photo-1744995489261-eb3876aa6c81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Gardening & Lawn Care", src: "https://images.unsplash.com/photo-1693776472225-be367ccf88b7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Tech Support", src: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Event Assistance", src: "https://images.unsplash.com/photo-1674081955099-9a290e8f5947?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Food Delivery & Takeaway", src: "https://plus.unsplash.com/premium_photo-1682130100826-913b21060e4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Errand Running", src: "https://plus.unsplash.com/premium_photo-1741657668215-22ebc30e1f52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { label: "Elderly Care Assistance", src: "https://plus.unsplash.com/premium_photo-1664910564620-0be4aeef55a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: "#4a90e2",
          fontWeight: 400,
          mt: 6,
          mb: 2,
          ml: 2,
          fontFamily: "Roboto, sans-serif"
        }}
      >
        Popular Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          px: 2,
          py: 3,
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((cat, index) => (
          <PopularServices key={index} label={cat.label} src={cat.src} />
        ))}
      </Box>
    </>
  );
}
