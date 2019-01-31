const TwitterStrategy = require('passport-twitter').Strategy;

const mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (passport) {

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
    /*  twitter AUTH  */

    passport.use('twitter', new TwitterStrategy({
        consumerKey: 'Vqf8Rz7lWT2htUOFMWL5XBvYk',
        consumerSecret: 'gQj2WP91i6LKfl5vXOk5hLwy8ceWv9fpjnL2H5fchaMYtWVq4U',
        callbackURL: "http://localhost:4000/auth/twitter/callback",
        profileFields: ['id', 'displayName', 'emails'],
        includeEmail:true
    },
        function (token, tokenSecret, profile, done) {

            let newUser = new User();
            newUser.twitter.email = profile.emails,
                newUser.twitter.fullName = profile.displayName,

                User.findOne({ email: newUser.twitter.email }, function (err, user) {
                    if (!user) {
                        newUser.save(function (err, newUser) {
                            if (err) return done(err);
                            done(null, newUser);
                        });
                    } else {
                        done(null, user);
                    }
                });
        }
    ));
}