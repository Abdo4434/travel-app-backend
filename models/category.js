const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String // optional: add an image for each category
});

module.exports = mongoose.model('Category', categorySchema);