'use strict'

const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const session = require('express-session');
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

// db instance connection
require("./config/db");

// ceate an express application
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

<<<<<<< HEAD

=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
const port = process.env.PORT || 4000;


app.get('/success', (req, res) => res.send("You have successfully logged in"));
app.get('/error', (req, res) => res.send("error logging in"));

// passport setup
const passport = require('passport');
<<<<<<< HEAD

// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }))
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport); 


// API ENDPOINTS
var routes = require('./api/routes/route'); //importing route
routes(app,passport);

// LISTENING
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

<<<<<<< HEAD
//https://pacific-citadel-64383.herokuapp.com
=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
