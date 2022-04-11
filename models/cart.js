const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    productId: {type:Schema.Types.ObjectId, ref: "Product"},
    user: {type:Schema.Types.ObjectId, ref: "User"},
})


module.exports = mongoose.model('Image', cartSchema);