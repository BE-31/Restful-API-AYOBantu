const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

//connect db
try {
    mongoose.connect(process.env.URL_DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Connected to database");
} catch(error) {
    handleError(error);
}
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