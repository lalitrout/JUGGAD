const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { admin, db } = require("./firebaseAdmin");
const verifySession = require("./middlewares/verifySession");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// 🔐 Session Login - Firebase
app.post("/auth-status", async (req, res) => {
  const idToken = req.body.token;
  const expiresIn = 7 * 24 * 60 * 60 * 1000;

  try {
    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: false, // set to true in production
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

// 🔍 Check Session
app.get("/auth-status", async (req, res) => {
  const sessionCookie = req.cookies.session;

  if (!sessionCookie) {
    return res.status(401).json({ isAuthenticated: false });
  }

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

// 🔓 Logout Route
app.post("/logout", async (req, res) => {
  const sessionCookie = req.cookies.session || "";
  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie);
    await admin.auth().revokeRefreshTokens(decodedClaims.sub);
  } catch (err) {
    console.log("Session invalid or already revoked.");
  }

  res.clearCookie("session");
  res.status(200).json({ message: "Logged out" });
});

// ✅ POST: Membership Verification
// ✅ POST: Membership Verification
app.post("/membership", verifySession, async (req, res) => {
  const { location, age, gender, aadhar } = req.body;
  const uid = req.uid;

  if (!location || !age || !gender || !aadhar) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Update members collection
    await db.collection("members").doc(uid).set({
      location,
      age,
      gender,
      aadhar,
      isMember: true,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // ✅ Also update isMember to true in users collection
    await db.collection("users").doc(uid).update({
      isMember: true,
    });

    res.status(200).json({ success: true, message: "Membership verified", isMember: true });
  } catch (error) {
    console.error("Firestore write error:", error.message);
    res.status(500).json({ success: false, message: "Failed to store membership" });
  }
});


// ✅ GET: Membership Status
app.get("/membership", verifySession, async (req, res) => {
  const uid = req.uid;

  try {
    const doc = await db.collection("members").doc(uid).get();

    if (doc.exists && doc.data().isMember) {
      return res.status(200).json({ isMember: true, ...doc.data() });
    }

    res.status(200).json({ isMember: false });
  } catch (error) {
    console.error("Firestore read error:", error.message);
    res.status(500).json({ isMember: false, error: "Failed to fetch membership" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
