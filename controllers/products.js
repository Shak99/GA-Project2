const Product = require('../models/product')
const Cart = require('../models/cart')


module.exports = {
    displayAll: displayAllProducts,
    details,
    create,
    new: newProduct,
    options,
    delete: deleteProduct
}

function newProduct(req, res) {
    res.render("products/new", { title: "Add Product" });
}

function create(req, res){
    console.log(req.body)
    Product.create(req.body, function(err, productDatabase){ 
        console.log(err)
        if (err) return res.redirect("/products/new");
        console.log(productDatabase);
        res.redirect("/products");
    })

    /*
    const product = new Product
    product.save(function(err){
        if(err) return res.redirect('/products/new')
        console.log(product)
        res.redirect('/products')
    })
    */
}

function displayAllProducts(req, res){
    Product.find({}, function(err, productDatabase){
        res.render("products/displayAll", {productDatabase, title: "All Products",
        })
    })
}

function details(req,res){
    Product.findById(req.params.id, function(err, productDatabase){
        console.log(productDatabase)
        res.render("products/details", {title: "Product Detail", productDatabase})
    })
}

function options(req, res){
    Product.find({}, function(err, productDatabase){
        res.render("products/upDelete", {productDatabase, title: "Modify Products Options",
        })
    })
}

function deleteProduct(req, res){
    
}


//for update use remove()-to erase doc