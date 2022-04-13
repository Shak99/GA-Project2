var router = require('express').Router();
const passport = require('passport');
const cartController = require('../controllers/carts');



router.post('/products/:id/carts', cartController.addItem);
router.delete('/carts/:id', cartController.deleteItem);


module.exports = router;
