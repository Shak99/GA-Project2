const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
	content: {type: String, required: true},
  rating: {type: String, min: 1, max: 5, default: 5},
  // Add the 3 new properties below
  user: {type: Schema.Types.ObjectId, ref: 'User'}, // referencing the user document
  userName: String, // we probably don't need to populate the user everytime, we can just store their username because thats the most common thing we'll display
  // with the review
  userAvatar: String
}, {
  timestamps: true
});

const productSchema = new mongoose.Schema({
	title: String,
    price: Number,
    description: String,
    image: String,
    reviews: [reviewSchema]
})


module.exports = mongoose.model('Product', productSchema);