const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  price: Number
});

module.exports = mongoose.model('Trip', tripSchema);