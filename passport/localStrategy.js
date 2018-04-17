var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "user[email]",
        passwordField: "user[password]"
      },
      function(email, password, done) {
        User.findOne({ email: email })
          .then(function(user) {
            console.log(user);
            if (!user || !user.validPassword(password)) {
              return done(null, false, {
                errors: { "email or password": "is invalid" }
              });
            }
            console.log(user);
            return done(null, user);
          })
          .catch(done);
      }
    )
  );
};
