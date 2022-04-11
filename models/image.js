const mongoose = require('mongoose');
// Create your User Model
const Schema = mongoose.Schema;

const imageSchema = new mongoose.Schema({
    productId: {type:Schema.Types.ObjectId, ref: "Product"},
    imageUrl: String
})

module.exports = mongoose.model('Image', imageSchema);