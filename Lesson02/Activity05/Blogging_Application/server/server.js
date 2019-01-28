const express = require("express");
const bodyParser = require("body-parser");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS
var routes = require('./api/routes/articleListRoutes'); //importing route
routes(app); 

// LISTENING
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});