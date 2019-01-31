'use strict'
const express = require("express");
const bodyParser = require("body-parser");

// db instance connection
require("./config/db");
var User = require('./api/models/userModel'),
    jsonwebtoken = require("jsonwebtoken");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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


// API ENDPOINTS
var routes = require('./api/routes/articleListRoutes'); //importing route
routes(app); 

// LISTENING
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});