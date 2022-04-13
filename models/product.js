const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
	userId: {type:Schema.Types.ObjectId, ref: "User"},
    comment: String,
    rating: String
})

const productSchema = new mongoose.Schema({
	title: String,
    price: Number,
    description: String,
    //image: String,
    reviews: [reviewSchema]
})


module.exports = mongoose.model('Product', productSchema);