const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/db");

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

//set server port
app.listen(process.env.PORT || 3000, () => {
    console.log("PORT 3000");
})