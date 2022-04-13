const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    user: {type:Schema.Types.ObjectId, ref: "User"},
    productId: {type:Schema.Types.ObjectId, ref: "Product"}
})


module.exports = mongoose.model('Image', cartSchema);