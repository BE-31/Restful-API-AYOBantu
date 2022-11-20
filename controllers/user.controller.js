const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


module.exports = {
    signUp: async (req, res) => {
        const data = req.body;

        try {
            let user = await User.findOne({
                email: data.email
            });
            if (user) {
                return res.status(400).json({
                    msg: "Email Already Exists"
                });
            }

            user = new User(data);

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(data.password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
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
