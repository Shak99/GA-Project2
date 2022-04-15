var router = require('express').Router();
const passport = require('passport');
const reviewsController = require('../controllers/reviews');


router.post('/:id', reviewsController.create);


module.exports = router;