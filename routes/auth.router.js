var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/auth'),
  {
    signin,
    signUp,
  } = require("../controllers/auth.controller.js");

router.post("/login", signin);

router.post('/signup',signUp);


module.exports = router;
