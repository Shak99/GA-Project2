// this is our movie model, which can talk to the database
const Product = require("../models/product");

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next){
	// Find the movie with the review!
	Product.findOne({'reviews._id': req.params.id}, function(err, productDatabase){
		// find the subdocument itself, find the review in the movieDocument, that has the same id as our req.params.id
		const review = productDatabase.reviews.id(req.params.id);
		// If the review wasn't made by the user redirect them back to the same page
		if(!review.user.equals(req.user._id)) return res.redirect(`/products/${productDatabase._id}`);

		review.remove()
		productDatabase.save(function(err){
			if(err) next(err);
			res.redirect(`/products/${productDatabase._id}`)
		})


	})


}

function create(req, res) {
  Product.findById(req.params.id, function (err, productDatabase) {
      console.log(req.user, "User Info")
    req.body.user = req.user;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    productDatabase.reviews.push(req.body); // mutating a document
    // we have to tell mongodb we changed the document,
    productDatabase.save(function (err) {
        console.log(err)
      console.log(productDatabase);
      res.redirect(`/products/${productDatabase._id}`);
    });
  });
}