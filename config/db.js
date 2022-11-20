const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/AYO";

module.exports = mongoose.connect(DB_URL);
