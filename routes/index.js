const express = require('express');
const { route } = require('./auth.router');
const router = express.Router();

const authRouter = require('./auth.router');

router.use("/auth", authRouter);

module.exports = router