const express = require("express"),
  router = express.Router(),
  {
    signin
  } = require("../controllers/auth.controller.js");

router.post("/login", signin, function (req, res) {

});


module.exports = router;