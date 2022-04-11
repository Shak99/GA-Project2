var router = require('express').Router();
const passport = require('passport');
const productsController = require('../controllers/products');



router.get('/', function(req, res, next) {
    res.render('products/displayAll')
  
  });

router.get("/", productsController.displayAll) //show all products
router.get("/new", productsController.new) //new product form
router.get("/:id", productsController.details) //show individual details
router.post("/", productsController.create) //store in database


module.exports = router;


//code check
///////////////////////
/*
<% if (productDatabse.length){ %>
    <%= productDatabase.title %>
    <%=imageDatabase.pic %>
    <%=productDatabase.price %>
    <%=productDatabase.description %>

<% } %>

<% if (productDatabase.reviews.length){ %>
    
<% } %>
*/

//Product.create({title:"Sage Test", description: "The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.", price:50})