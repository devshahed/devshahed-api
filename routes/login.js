const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/:user&:pass', (req, res)=> {
   const user = req.params.user;
   const pass = req.params.pass;
   const payload = {
      username: user,
      password: pass
   }
   jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '365d'}, (err, token)=>{
      if(err) throw err;
      res.cookie("token", token);
      res.send();
   });
});
module.exports = router;