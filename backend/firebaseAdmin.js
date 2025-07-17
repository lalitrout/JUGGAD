// firebaseAdmin.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAuth.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
