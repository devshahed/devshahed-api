const mongoose = require('mongoose');
const posts = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    img: String,
    url: String
});

module.exports = mongoose.model('Posts', posts)