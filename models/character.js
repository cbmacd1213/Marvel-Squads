const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let characterSchema = new Schema({
    name: {
        type: String,
        enum: ['Spiderman', 'Iron Man', 'Hulk', 'Captain America', 'Thor']
    }
})

module.exports = mongoose.model('Character', characterSchema);