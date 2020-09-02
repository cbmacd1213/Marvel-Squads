const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let characterSchema = new Schema({
//     name: {
//         type: String,
//         enum: ['Spiderman', 'Iron Man', 'Hulk', 'Captain America', 'Thor']
//     }
// })


let squadSchema = new Schema({
    googleId: String,
    name: {
        type: String
        // enum: ['North', 'East', 'South', 'West']
    },
    characters: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Character'
    }]   
})

module.exports = mongoose.model('Squad', squadSchema);