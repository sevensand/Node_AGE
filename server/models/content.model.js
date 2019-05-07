var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
  image: String,
  title: String,
  mirror: String,
  dacastid: String,
  description: String,
  actors: String,
  director: String,
  trailer: String,
  movie: String,
  genre: String,
  category: String,
  subcategory: String,
  duration: String,
  releaseDate: Date,
  shows: String,
  rate: Number,
  views: Number,
  theme: String,
  datepost: Date,
  browse: String,
})


module.exports = mongoose.model("content", ContentSchema);
