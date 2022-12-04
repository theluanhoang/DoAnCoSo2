const jwt = require("jsonwebtoken");

const middlewareController = {
    // verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            const accessToken = token.split(" ")[1];
            // Chứng nhận json web token
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, account) => {
                if(err) {
                    res.status(403).json("Token is not valid")
                    return;
                }
                req.account = account;
                next();
            });
        }
        else {
            res.status(401).json("You're not authenticated")
        }
    },
    verifyTokenAndAdminAuth: (req, res, next) => {
        middlewareController.verifyToken(req,res, () => {
            if (req.account.id == req.params.id || req.account.admin) {
                next();
            }
            else {
                res.status(403).send("You're not allowed to delete other");
            }
        });
    }
}

module.exports = middlewareController;