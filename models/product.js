const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
	comment: String,
    userId: {type:Schema.Types.ObjectId, ref: "User"}
})

const productSchema = new mongoose.Schema({
	title: String,
    price: Number,
    description: String,
    //image: String,
    reviews: [reviewSchema]
})


module.exports = mongoose.model('Product', productSchema);