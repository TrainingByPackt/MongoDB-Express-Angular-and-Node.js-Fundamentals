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
        clientID: 'akeyishere',
        clientSecret: 'mysecretisbetterthanyoursecret',
        callbackURL: "http://localhost:4000/auth/twitter/callback",
        profileFields: ['id', 'displayName', 'emails'],
        includeEmail:true
    },
        function (token, tokenSecret, profile, done) {

            let newUser = new User();
            newUser.twitter.email = profile.emails[0].value,
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