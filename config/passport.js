const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const User = require('../models/user')

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) { // cb is what we refer to as the verify callback, this passes information to passport.serializeUser
		// This will be called when the user logins into the app
		console.log(profile)
		console.log('this profile ^ from google --------------------------------------------------')
		// Has a user logged in with oauth before?	
		User.findOne({googleId: profile.id}, function(err, user){
			// if user is defined, thenn we found someone, so that means they have logged in before
			// if user is undefined that means they have never logged in
			if(user) return cb(null, user); // passes the information to the next spot in the middleware chain
			if(err) return cb(err)
		})
	})
)

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(userId, cb) {
	User.findById(userId, function(err, user){
		if(err) return cb(err);
		cb(null, user); // <- this assings the user document we just found to the request object
		// assinging the user to req.user
	})
})