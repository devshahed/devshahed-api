const express = require('express');
const router = express.Router();
const Posts = require('../model/posts');
const auth = require('../midlewares/auth');

router.route('/').get((req, res)=>{
    Posts.find().then((result)=>{
        res.status(200).json({
            posts: result
        })
    })
        .catch((err)=>{
            res.status(401).json({
                error: err
            })
        })
})
.post(auth, (req, res)=>{
    const post = new Posts({
        name: req.body.name,
        img: req.body.img,
        url: req.body.url
    });
    post.save()
        .then(()=>{
            res.status(200).json({
                msg: "saved"
            })
        })
        .catch((err)=>{
            res.status(404).json({
                msg: err
            })
        })
});

router.delete('/:id',auth, (req, res)=>{
    Posts.deleteOne({_id: req.params.id}).then(()=>{
        res.status(200).json({
            msg: "deleted"
        })
    }).catch((err)=>{
        res.json({
            error: err
        })
    })
});

module.exports = router;