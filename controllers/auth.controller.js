const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = {
  signin: (req, res) => {
    User.findOne({
      username: req.body.username
    })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({
          message: err
        });
        return;
      }
      if (!user) {
        return res.status(404).send({
          message: "User Not Found"
        });
      }

      //cek password
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if(!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password"
        });
      }

      //signing token (using user id)
      const token = jwt.sign({
        id: user.id,
        role:user.role
      }, process.env.SECRET_KEY, {
        expiresIn: 86400
      });

      //response when user success the login step
      res.status(200).send({
        user: {
          id:user._id,
          username: user.username,
          name: user.name,
          role: user.role
        },
        message: "You're Logged In",
        accessToken: token
      });
    });
  },
  signUp: async (req, res) => {
    const data = req.body;

    try {
        let user = await User.findOne({
            username: data.username
        });
        if (user) {
            return res.status(400).json({
                msg: "Username Already Exists"
            });
        }

        user = new User(data);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);

        await user.save();

        const payload = {
          id: user.id,
          role:user.role
        };

        jwt.sign(
            payload,
            process.env.SECRET_KEY, {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
  }
}