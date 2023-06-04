const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  name: String,
  stops: [{
    station: String,
    distance: Number,
    departureTime: String
  }]
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
