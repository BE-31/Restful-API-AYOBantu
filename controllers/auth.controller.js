const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const nodemailer = require("nodemailer");

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
    let data = req.body;

    try {
        let user = await User.findOne({
            username: data.username
        });
        if (user) {
            return res.status(400).json({
                msg: "Username Already Exists"
            });
        }

        const emailToken = jwt.sign({
          username: req.id,
          role:req.role | "user",
          type: "email"
        }, process.env.SECRET_KEY, {
          expiresIn: 3600
        });

        data = {
          ...data,
          emailToken
        }

        user = new User(data);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);

        await user.save();

        const payload = {
          id: user.id,
          role:user.role
        };

        // Send Email
        const url = `http://localhost:3000/auth/verification/${emailToken}`;
        
        let transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: process.env.SMTP_SECURE === 'false'? false : true,
          auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS, 
          },
        });

        const message = `
          <h1>Segera Aktivasi Akun Kamu!!!</h1>
          <p>Klik link dibawah ini untuk mengaktifkan akun kamu</p>
          <p><a href=${url}>${url}</a></p>
          <hr />
          <p>Link ini akan kadaluarsa dalam 1 jam</p>
          <p>Ini adalah email otomatis, mohon untuk tidak membalas email ini</p>
        `;
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: user.email,
          subject: "Aktivasi Akun AYO Bantu!",
          html: message
        });

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
  },

  verification: async (req, res) => {
    const { token } = req.params;
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if(decoded.type !== "email") {
        return res.status(400).json({
          msg: "Invalid Token"
        });
      }
      else {
        const user = await User.findOne({
          emailToken: token
        });
        if(user){
          user.isVerified = true;
          await user.save();
          res.status(200).json({
            msg: "Your account has been activated"
          })
        }
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
}