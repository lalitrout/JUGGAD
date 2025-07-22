import React from "react";
import "./SearchBar.css";
import Button from "@mui/material/Button";
import Search from "./Search.jsx";
import useAuth from "../../context/UseAuth.jsx";

const SearchBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="Dk9TVqv">
      {/* App Name and Description */}
      <h1 className="app-title">
        <span className="gradient-text">Jugaad</span> – Get everyday tasks done
        by people near you
      </h1>

      {/* Search bar */}
      <div className="search-wrapper">
        <form className="search-form button-inside">
          <Search placeholder="What do you need help with?" />
        </form>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <Button
          href={isAuthenticated ? "/post-task" : "/auth"}
          variant="contained"
          size="large"
          sx={{
            mt: 1,
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "0.8rem",
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
          Post a Task
        </Button>
        <Button
          href={isAuthenticated ? "/join-provider" : "/auth"}
          variant="contained"
          size="large"
          sx={{
            mt: 1,
            borderRadius: "999px",
            fontWeight: 600,
            fontSize: "0.8rem",
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
          Join Us as Helper.
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
