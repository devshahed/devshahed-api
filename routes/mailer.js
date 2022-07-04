const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
require('dotenv').config();

//mail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS

    },
});

router.post('/', (req, res)=>{
    let name = req.body.a + ' ' + req.body.d;
    const message = `<div><h3>Name: ${name}</h3><h3>Email: ${req.body.email}</h3><h3>Phone: ${req.body.p}</h3><p>${req.body.message}</p></div>`
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_RECEIVER,
        subject: "From your website",
        html: message
    }
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            res: info
        });
    })
});

module.exports = router;