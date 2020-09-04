const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let squadSchema = new Schema({
    googleId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    name: {
        type: String
    },
    characters: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Character'
    }]   
})



module.exports = mongoose.model('Squad', squadSchema);