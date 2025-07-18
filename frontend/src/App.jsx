import Navbar from "./components/Navbar.jsx";
import { Box } from "@mui/material";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import AuthPage from "./Authentication/AuthPage.jsx";
import UnderConstruction from "./components/UnderConstruction.jsx";
import PostTaskPage from "./components/JoinAsProvider/JoinProviderSection.jsx";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <Box sx={{ flex: 1, mt: 8 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/join-provider" element={<PostTaskPage />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
