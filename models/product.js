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
    reviews: [reviewSchema]
})

const imageSchema = new mongoose.Schema({
    productId: {type:Schema.Types.ObjectId, ref: "Product"}
})

const cartSchema = new mongoose.Schema({
    userId: {type:Schema.Types.ObjectId, ref: "User"},
    productId: [productSchema]
})

module.exports = mongoose.model('Product', productSchema);