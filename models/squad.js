const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  id: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  name: {
    type: Date,
    required: true
  }
});

const SquadSchema = new Schema({
  id: {
      type: String,
      enum: ['American', 'Delta', 'Southwest', 'United']
 },
  name: {
      type: String,
      enum: [],
  },
members: [characterSchema]
});



module.exports = mongoose.model('Squad', SquadSchema);