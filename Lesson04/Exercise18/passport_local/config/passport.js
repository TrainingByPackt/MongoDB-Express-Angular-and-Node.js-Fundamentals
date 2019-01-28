const bcrypt = require('bcryptjs');
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require('mongoose'),
    User = mongoose.model('User');

// expose this function to our app using module.exports
module.exports = function (passport) {
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({ email: email }, function (err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                } else {

                    // if there is no user with that email
                    // create the user
                    var newUser = new User();

                    // set the user's local credentials
                    newUser.fullName = req.body.fullName;
                    newUser.email = req.body.email;
                    newUser.hash_password = bcrypt.hashSync(req.body.password, 10)

                    // save the user
                    newUser.save(function (err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }

            });

        }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true //
    },
        function (req, email, password, done) {
            User.findOne({
                email: email
            }, function (err, user) {
                // This is how you handle error
                if (err) return done(err);
                // When user is not found
                if (!user) return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash);
                // When password is not correct
                if (!user.comparePassword(req.body.password)) return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata);
                // When all things are good, we return the user
                return done(null, user);
            });


        })

    )
}

