// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAuth.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = {admin, db};
