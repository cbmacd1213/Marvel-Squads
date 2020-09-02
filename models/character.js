const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let characterSchema = new Schema({
    name: {
        type: String,
    },
    
})

module.exports = mongoose.model('Character', characterSchema);