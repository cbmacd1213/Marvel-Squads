const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    googleId: String,
    squad: {
        type: String,
    },
    character: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);