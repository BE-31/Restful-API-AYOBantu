var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/auth'),
  {
    signin,
    signUp,
    verification
  } = require("../controllers/auth.controller.js");

router.post("/login", signin);

router.post('/signup',signUp);

router.get('/verification/:token', verification);


module.exports = router;
