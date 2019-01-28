const FacebookStrategy = require('passport-facebook').Strategy;

const mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (passport) {

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
    /*  FACEBOOK AUTH  */

    const FACEBOOK_APP_ID = 'your app id';
    const FACEBOOK_APP_SECRET = 'your app secret';

    passport.use('facebook', new FacebookStrategy({
        clientID: '204478219982851',
        clientSecret: 'fedbb6cca9323339fad7e978fe122b03',
        callbackURL: "http://localhost:4000/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'emails']
    },
        function (accessToken, refreshToken, profile, done) {

            let newUser = new User();
            newUser.facebook.email = profile.emails[0].value,
                newUser.facebook.fullName = profile.displayName,

                User.findOne({ email: newUser.facebook.email }, function (err, user) {
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