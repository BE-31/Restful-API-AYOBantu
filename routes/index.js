const express = require('express');
const { route } = require('./auth.router');
const router = express.Router();

const authRouter = require('./auth.router');
const articleRouter = require('./article.router');
const campaignRouter = require('./campaign.router');

router.use("/auth", authRouter);
router.use('/article', articleRouter);
router.use('/campaign', campaignRouter);

module.exports = router