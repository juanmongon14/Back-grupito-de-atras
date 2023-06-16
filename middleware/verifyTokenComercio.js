const jwt = require ("jsonwebtoken");
require ("dotenv").config();
const secret = process.env.JWT_SECRET;

// generación de middleware que va a verificar el jwt

exports.verifyToken = (req, res, next) => {
    const authorizationHeaders = req.headers.authorization;
    if(!authorizationHeaders) {
        return res.status(404).json({error: "No token provided"});
    }
    const token = authorizationHeaders.replace("Bearer ","");
    jwt.verify(token, secret, (err) => {
        if(err) {
            console.log("Clave secreta utilizada para verificar el token:", secret, err);
            res.status(401).json({error:"invalid token"});
        }
        const payload = jwt.decode(token)
        req.user = {userId: payload.userId,
            nit: payload.nit};
        next();
    });
};