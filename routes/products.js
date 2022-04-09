var router = require('express').Router();
const passport = require('passport');
const productsController = require('../products/flights')

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

router.get("/", productsController.index) //show products


module.exports = router;