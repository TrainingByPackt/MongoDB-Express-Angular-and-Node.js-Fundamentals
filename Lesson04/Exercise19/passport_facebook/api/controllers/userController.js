// const User = require("../models/userModel");
const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    User = mongoose.model('User');

// exports.register = (req, res) => {
//     let newUser = new User(req.body);
//     newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
//     newUser.save((err, user) => {
//         if (err) {
//             res.status(500).send({ message: err });
//         }
//         user.hash_password = undefined;
//         res.status(201).json(user);
//     });
// };

// exports.signIn = (req, res) => {
//     User.findOne({
//         email: req.body.email
//     }, (err, user) => {
//         if (err) throw err;
//         if (!user) {
//             res.status(401).json({ message: 'Authentication failed. User not found.' });
//         } else if (user) {
//             if (!user.comparePassword(req.body.password)) {
//                 res.status(401).json({ message: 'Authentication failed. Wrong password.' });
//             } else {
//                 res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
//             }
//         }
//     });
// };

// exports.loginRequired = (req, res, next) => {
//     if (req.user) {
//         next();
//       } else {
//          res.status(401).json({ message: 'Unauthorized user!' });
//       }
// };


const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
      UserDetails.findOne({
        username: username 
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));