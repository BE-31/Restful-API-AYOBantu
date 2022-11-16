const mongoose = require('mongoose');
require("dotenv").config();

const db = mongoose.connect(process.env.URL_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports = db