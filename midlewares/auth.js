const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next)=>{
    const token = req.cookies.token;
    jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] } ,(err, decoded)=>{
        if(err) return res.status(401).json({error: "Authentication failed"});
        next();
    });
}
module.exports = auth;