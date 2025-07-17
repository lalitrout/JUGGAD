const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const admin = require("./firebaseAdmin"); 

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.post("/auth-status", async (req, res) => {
  const idToken = req.body.token;
  const expiresIn = 7 * 24 * 60 * 60 * 1000;

  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: false, // true krna hai deploy k time...
      sameSite: "lax",
    };

    res.cookie("session", sessionCookie, options);
    const decodedToken = await admin.auth().verifySessionCookie(sessionCookie);

    res.status(200).json({
      isAuthenticated: true,
      uid: decodedToken.uid,
      email: decodedToken.email,
    });
  } catch (error) {
    console.error("Session creation failed:", error.message);
    res.status(401).json({ isAuthenticated: false, error: error.message });
  }
});

app.get("/auth-status", async (req, res) => {
  const sessionCookie = req.cookies.session || "";

  try {
    const decodedToken = await admin.auth().verifySessionCookie(sessionCookie, true);

    res.status(200).json({
      isAuthenticated: true,
      uid: decodedToken.uid,
      email: decodedToken.email,
    });
  } catch (error) {
    console.error("Session check failed:", error.message);
    res.status(401).json({ isAuthenticated: false });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("session");
  res.status(200).json({ message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
