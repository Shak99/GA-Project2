const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const wishSchema = new mongoose.Schema({
    itemName: String,
    itemPrice: Number
})

const cartSchema = new mongoose.Schema({
    user: {type:Schema.Types.ObjectId, ref: "User"},
    products: [wishSchema]
})



module.exports = mongoose.model('Cart', cartSchema);