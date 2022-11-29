const jwt = require('jsonwebtoken');

const rolesRight = {
  admin: [
    "getAllCampaign",
    "getCampaignByCategory",
    "updateCampaignById"
  ],
  user: [
    "getCampaignByIdUser", 
    "createCampaign"]
};

const auth = (requireRight) => async (req,res,next) => {
    let token = req.headers.authorization;
    if (token) {      
        try {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
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