const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
const cors = require("cors")({ origin: true });
admin.initializeApp();

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

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
