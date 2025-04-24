const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  pricePerNight: Number,
  rating: Number,
  isAvailable: Boolean,
  type: String, 
  images: [String], 
  description: String,
  category: String 
});

module.exports = mongoose.model('Hotel', hotelSchema);