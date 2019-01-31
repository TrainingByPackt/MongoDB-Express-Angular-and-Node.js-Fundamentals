//	Load express module 

var express = require('express');

//	Initialize router

var router = express.Router();

//	Route to Dashboard

router.get('/', function(req, res) {
  res.send('Welcome to admin dashboard');
});

//	Route to About page

router.get('/about', function(req, res) {
  res.send('About page');
});

//	Export router

module.exports = router;
