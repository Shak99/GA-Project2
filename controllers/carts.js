//const Product = require('../models/product')
const Cart = require('../models/cart')


module.exports = {
    addItem,
    deleteItem,
    list
}

function addItem(req, res){
    Cart.insertMany({user : req.user, productId : req.params.id}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect(`products/${req.params.id}/details`)
        res.redirect("/carts")
    })
}

function deleteItem(req, res){
    Cart.findByIdAndDelete(req.params.id, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect("/carts")
        console.log(`Sucessfully deleted product #${req.params.id} from cart`)
        res.redirect("/carts")
    })
}

function list(req, res){
    Cart.find({}, function(err, cartDatabase){
        res.render("carts/index", {cartDatabase, title: "List Cart",
        })
    })
}

function clearCart(req, res){
    Cart.remove({}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect("carts/")
        console.log(`Sucessfully deleted product #${req.params.id} from cart`)
        res.redirect("carts/")
    })
}