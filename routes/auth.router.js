var express = require("express"),
  router = express.Router(),
  verifyToken = require('../middlewares/auth'),
  {
    signin
  } = require("../controllers/auth.controller.js");

router.post("/login", signin, function (req, res) {

});

//ini sintaks yang bisa dipakai untuk verifikasi admin / user supaya bisa bedakan aksesnya
router.get("/hiddencontent", verifyToken, function (req, res) {
  const role = req.user.role;
  if (role == "admin") {
    res.status(200)
      .send({
        message: "Congratulations! but there is no hidden content"
      });
  } else {
    res.status(403)
      .send({
        message: "Unauthorised access"
      });
  }
});

module.exports = router;