const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const logger = require('morgan');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const loginRouter = require('./routes/login');
const mailerRouter = require('./routes/mailer');
require('dotenv').config();
const DB = process.env.DB;
const app = express();

mongoose.connect(DB).then(()=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/login', loginRouter);
app.use('/mail', mailerRouter);

module.exports = app;
