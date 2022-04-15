const Product = require('../models/product')
const Cart = require('../models/cart')


module.exports = {
    displayAll: displayAllProducts,
    details,
    create,
    new: newProduct,
    options,
    delete: deleteProduct,
    update,
    updatePage
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
        res.redirect("/products/upDelete");
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
        console.log(req.user)
        res.render("products/upDelete", {productDatabase, title: "Modify Products Options",
        })
    })
}

function deleteProduct(req, res){
    Product.findByIdAndDelete(req.params.id, function(err, productDatabse){
        console.log(err)
        if (err) return res.redirect("/products/upDelete")
        console.log(`Sucessfully deleted product #${req.params.id}`)
        res.redirect("/products/upDelete")
    })
}

//slash for redirecting and no slash for accessing files

function updatePage(req, res) {
    Product.findById(req.params.id, function(err, productDatabase){
        res.render("products/update", {productDatabase, title: "Update Form" });
    })
}

function update(req,res){
    Product.findOneAndUpdate({_id : req.params.id}, req.body, function(err, updatedData){
        if(err) return res.send(500, {error: err});
        return res.redirect("/products/upDelete")
    })
}

//for update use remove()-to erase doc