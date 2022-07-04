const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');


router.route('/').post((req, res)=>{
  bcrypt.hash(req.body.password, 5, (err, hash)=>{
    if(err){
      res.status(500).json({
        error: err
      });
    }else {
      const user = new User({
        username: req.body.username,
        password: hash
      });
      user.save().then(()=>{
        res.status(200).json({
          msg: "saved successfully"
        });
      }).catch(err=>{
        res.json({
          error: err
        });
      })
    }
  })
});
router.delete('/delete/:id', (req, res)=>{
  User.remove({_id: req.params.id})
      .then(()=>{
        res.status(200).json({
          msg: "Deleted successfully"
        })
      }).catch((err)=>{
        res.json({
          error: err
        })
  })
});

module.exports = router;
