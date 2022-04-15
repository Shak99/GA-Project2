var router = require('express').Router();
const passport = require('passport');
const productsController = require('../controllers/products');


router.get("/", productsController.displayAll) //show all products
router.get("/new", productsController.new) //new product form
router.get("/upDelete", productsController.options) //new product form
router.get("/confirmation/:id", productsController.confirm) //new product form
router.get("/update/:id", productsController.updatePage)
router.put('/update/:id', productsController.update)
router.get("/:id", productsController.details) //show individual details
router.post("/", productsController.create) //store in database
router.delete('/delete/:id', productsController.delete)
//router.post("/:id", productsController.addItem) //add item to cart


module.exports = router;


