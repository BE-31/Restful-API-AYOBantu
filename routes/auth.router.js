var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/auth'),
  {
    signin
  } = require("../controllers/auth.controller.js");

router.post("/login", signin, function (req, res) {

});


module.exports = router;
