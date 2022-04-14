var router = require('express').Router();
const passport = require('passport');
const cartController = require('../controllers/carts');


//localhost:3000/carts
router.get('/', cartController.list)
router.post('/add/:id', cartController.addItem);
router.delete('/delete/:id', cartController.deleteItem);


module.exports = router;
