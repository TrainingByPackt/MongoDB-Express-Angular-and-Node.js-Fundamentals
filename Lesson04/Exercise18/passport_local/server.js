'use strict'

const express = require("express"),
bodyParser = require("body-parser"),
bcrypt = require('bcryptjs'),
session  = require('express-session'),
cookieParser = require('cookie-parser'),
morgan = require('morgan'),
flash    = require('connect-flash');

// db instance connection
require("./config/db");

// ceate an express application
const app = express();
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'paulouyegepackt',
	resave: true,
	saveUninitialized: true
 } )); // session secret

/* PASSPORT LOCAL AUTHENTICATION */
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport); 

// API ENDPOINTS
var routes = require('./api/routes/route'); //importing route
routes(app,passport);

const port = process.env.PORT || 4000;
// LISTENING
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


