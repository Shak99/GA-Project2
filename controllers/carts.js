//const Product = require('../models/product')
const Cart = require('../models/cart')


module.exports = {
    addItem,
    deleteItem
}

function addItem(req, res){
    Cart.products.save( {productID: req.params.id}, function(err, cartDatbase){
        if (err) return res.redirect(`/products/${req.params.id}/details`)
        res.redirect("/carts")
        //what about saving user id??????
    } )
}

function deleteItem(req, res){

}