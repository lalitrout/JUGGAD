import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PopularServices from "./PopularServices";

export default function Services() {
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Scroll right by 300px
    }
  };

  const categories = [
    { label: "Babysitting", src: "https://images.unsplash.com/photo-1645818985771-be09e22cdef1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Pet Sitting & Dog Walking", src: "https://images.unsplash.com/photo-1672477669749-92b77e03f632?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Home Cleaning", src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Grocery Pickup", src: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Tutoring & Homework Help", src: "https://plus.unsplash.com/premium_photo-1661962988901-3ae08e74a76c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Furniture Assembly", src: "https://plus.unsplash.com/premium_photo-1744995489261-eb3876aa6c81?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Gardening & Lawn Care", src: "https://images.unsplash.com/photo-1693776472225-be367ccf88b7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Tech Support", src: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Event Assistance", src: "https://images.unsplash.com/photo-1674081955099-9a290e8f5947?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Food Delivery & Takeaway", src: "https://plus.unsplash.com/premium_photo-1682130100826-913b21060e4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Errand Running", src: "https://plus.unsplash.com/premium_photo-1741657668215-22ebc30e1f52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0" },
    { label: "Elderly Care Assistance", src: "https://plus.unsplash.com/premium_photo-1664910564620-0be4aeef55a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0" }
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

      <Box sx={{ position: "relative" }}>
        {/* Scrollable card row */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            px: 2,
            py: 3,
            scrollBehavior: "smooth",
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

        {/* Scroll Icon - clickable */}
        <IconButton
          onClick={handleScrollRight}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
            display: { xs: "none", sm: "flex" },
            ":hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
}
