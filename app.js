const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/db");
const nodemailer = require("nodemailer");

const allRoutes = require('./routes');

require("dotenv").config();

//connect db
db.then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})
process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(allRoutes);

//set server port
app.listen(process.env.PORT || 3000, () => {
    console.log("PORT 3000");
})

// Cek Koneksi SMTP
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'false'? false : true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, 
    },
});
transporter
    .verify()
    .then(() => {
    console.log("Ready for send emails")
    })
    .catch((err) => {
        console.log(err);
    });