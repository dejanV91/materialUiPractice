const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();

const transporet = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: config.user.email, pass: config.user.password },
});

let mailOptions = {
  from: "Material - UI",
  to: "dejanvukoicic91@gmail.com",
  subject: "Testing nodemailer",
  text: "Test successful",
};

admin.initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
