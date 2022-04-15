//const Product = require('../models/product')
/*const Cart = require('../models/cart')
const Product = require('../models/product')


module.exports = {
    addItem,
    deleteItem,
    list,
    success
}

function addItem(req, res){
    Cart.insertMany({user : req.user, productId : req.params.id}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect(`products/${req.params.id}/details`)
        res.redirect("/carts")
        console.log(cartDatabase)
    })
}

// Product.findById(req.params.id, function(err, productDocument){
//     // console.log(movieDocument, " <- from the callback Move.findById")
//     // add the performer id to the movie cast array
//     productDocument.cast.push(req.body.productId);
//     // If you mutate a mongo document what do you have to do?
//     // does the database know you changed it?
//     movieDocument.save(function(err){
//     // respond back to the client (res.redirect)
//         res.redirect(`/movies/${movieDocument._id}`)

//     })
// })




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

/*function list(req, res){
    Cart.find({}, function(err, cartDatabase){
        //console(cartDatabase.products)
            console.log(cartDatabase, "Here the bug")
            res.render("carts/index", {title: "Cart Info", cartDatabase})
    })
}*/

/*
Flight.findById(req.params.id, function(err, flightDatabase){
        console.log(flightDatabase)
        Ticket.find({flight : req.params.id}, function(err, ticketDatabase){
            console.log(ticketDatabase)
            res.render("flights/show", {title: "Flight Detail", flightDatabase, ticketDatabase});
        })
    })
*
function clearCart(req, res){
    Cart.remove({}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect("carts/")
        console.log(`Sucessfully deleted product #${req.params.id} from cart`)
        res.redirect("carts/")
    })
}

function success(req, res){
    res.render("carts/success")
}
*/

///////////////////////////////////////////////////////////////////


//const Product = require('../models/product')
const Cart = require('../models/cart')


module.exports = {
    addItem,
    deleteItem,
    list,
    success
}

function addItem(req, res){
    Cart.insertMany({user : req.user, productId : req.params.id}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect(`products/${req.params.id}/details`)
        res.redirect("/carts")
        console.log(cartDatabase.productId, "<- Product ID")
        console.log(cartDatabase)
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
/*
Flight.findById(req.params.id, function(err, flightDatabase){
        console.log(flightDatabase)
        Ticket.find({flight : req.params.id}, function(err, ticketDatabase){
            console.log(ticketDatabase)
            res.render("flights/show", {title: "Flight Detail", flightDatabase, ticketDatabase});
        })
    })
*/
function clearCart(req, res){
    Cart.remove({}, function(err, cartDatabase){
        console.log(err)
        if (err) return res.redirect("carts/")
        console.log(`Sucessfully deleted product #${req.params.id} from cart`)
        res.redirect("carts/")
    })
}

function success(req, res){
    res.render("carts/success")
}