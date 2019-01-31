'use strict'
const express = require("express");
const bodyParser = require("body-parser");

// db instance connection
require("./config/db");
var User = require('./api/models/userModel'),
    jsonwebtoken = require("jsonwebtoken");

const app = express();

<<<<<<< HEAD
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

=======
const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1],  'RESTfulAPIs', (err, decode) => {
                if (err) req.user = undefined;
                req.user = decode;
                next();
            });
    } else {
        req.user = undefined;
        next();
    }
});

<<<<<<< HEAD

// API ENDPOINTS
var routes = require('./api/routes/route'); //importing route
routes(app); 

// LISTENING
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
=======
// API ENDPOINTS
var routes = require('./api/routes/route'); //importing route
routes(app);

// LISTENING
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
});