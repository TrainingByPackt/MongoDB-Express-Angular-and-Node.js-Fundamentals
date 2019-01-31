const express = require("express");
const bodyParser = require("body-parser");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// API ENDPOINTS
var routes = require('./api/routes/articleListRoutes'); //importing route
routes(app); 

// LISTENING
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});