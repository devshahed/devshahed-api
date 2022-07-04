const mongoose = require('mongoose');
const user = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
});

module.exports = mongoose.model('User', user)