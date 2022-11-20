const express = require('express');
const { route } = require('./auth.router');
const router = express.Router();

const authRouter = require('./auth.router');
const articleRouter = require('./article.router')
const userRouter = require("./user.router");

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use('/article', articleRouter)

module.exports = router