import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SideDrawer from "./Landing/SideDrawer";
import Button from "@mui/material/Button";
import useAuth from "../context/UseAuth.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, user } = useAuth(); // destructure user here
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "#282c34",
          boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.05)" : "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          transition: "box-shadow 0.3s ease-in-out",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: scrolled
              ? "translateX(-50%) scaleX(1)"
              : "translateX(-50%) scaleX(0)",
            transformOrigin: "center",
            height: "2px",
            width: "98%",
            backgroundColor: "#1976d2",
            borderRadius: "4px",
            boxShadow: "0 2px 6px rgba(25, 118, 210, 0.3)",
            transition: "transform 0.4s ease-in-out",
          },
        }}
      >
        <Toolbar>
          <SideDrawer />
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, ml: 5, textDecoration: "none" }}
            component={Link}
            to="/"
          >
            <span
              style={{
                background:
                  "linear-gradient(to right, #0d47a1, #90caf9, #1976d2, #42a5f5, #2196f3, #1e88e5, #1e88e5, #1976d2, #1565c0, #0d47a1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 380,
              }}
            >
              JUGGAD
            </span>
          </Typography>

          {isAuthenticated ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 300, color: "#1976d2" }}
              >
                Hi, {user?.name || "User"}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Button
              href="/auth"
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
              Join Now
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
