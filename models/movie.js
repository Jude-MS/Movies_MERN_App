const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  title: { type: String, required: true },
  imagePath: { type: String, required: true},
  synopsis: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseDate: { type: String, required: true },
});
 
module.exports = mongoose.model('Movie', movieSchema);
