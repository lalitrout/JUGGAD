// middlewares/verifySession.js
const {admin} = require("../firebaseAdmin");

const verifySession = async (req, res, next) => {
  const sessionCookie = req.cookies.session || "";

  try {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
    req.uid = decodedClaims.uid;
    next();
  } catch (error) {
    console.error("Session invalid:", error.message);
    return res.status(401).json({ isAuthenticated: false, message: "Invalid session" });
  }
};

module.exports = verifySession;
