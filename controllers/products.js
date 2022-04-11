const Product = require('../models/product')
const Image = require('../models/image')


module.exports = {
    displayAll: displayAllProducts,
    details,
    create,
    new: newProduct
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
}

function displayAllProducts(req, res){
    Product.find({}, function(err, productDatabase){
        res.render("products/index", {productDatabase, title: "All Products",
        })
    })
}

function details(req,res){
    Product.findById(req.params.id, function(err, productDatabase){
        console.log(productDatabase)
        Image.find({product : req.params.id}, function(err, imageDatabase){
            console.log(imageDatabase)
            res.render("products/display", {title: "Product Detail", productDatabase, imageDatabase})
        })
    })
}