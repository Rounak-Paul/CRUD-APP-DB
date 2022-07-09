const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    gamertag:{
        type:String,
        required: true,
        unique: true
    },
    server: String,
    pronouns: String,
    status: String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb