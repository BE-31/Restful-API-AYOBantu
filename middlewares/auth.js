const jwt = require('jsonwebtoken');

const rolesRight = {
    admin:['create','update','delete', 'deleteAll'],
    user:[]
}

const auth = (requireRight) => async (req,res,next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (rolesRight[decoded.role].includes(requireRight)) {
                next();
            }
            else {
                res.status(403).json({
                    message : "Forbidden"
                })
            }
        } catch (error) {
            res.status(401).json({
                message : "Unauthorized"
            })
        }
    }
    else {
        res.status(401).json({
            message : "Unauthorized"
        })
    }
}

module.exports = auth;