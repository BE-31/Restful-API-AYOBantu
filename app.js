const express = require("express")
const app = express()

// PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server Running on Port ", PORT)
})

// Database
const db = require("./config/db");

db.
then(() => {
  console.log("Database Connected");
}).catch((err) => {
  console.log(err);
});

// Middleware
app.use(express.json())

// Routes
const allRouter = require("./routes")

app.use(allRouter)
