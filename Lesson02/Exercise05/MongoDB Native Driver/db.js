/*Its assumed that you have already created a mongodb atlas cluster 
in previous exercise, Therefore, use the cluster credentials 
(username and password for mongodb atlas cluster) for this exercise */

//install mongodb using 'npm install mongodb'

// Load mongodb module and create a mongoClient class instance
const MongoClient = require('mongodb').MongoClient;

// Declare a variable named uri and assign MongoDB connection string

var uri = "mongodb+srv://username:password@cluster0-0wi3e.mongodb.net/test?retryWrites=true";

// Declare a variable named option and assign optional settings

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser:true
  };

//	 Connect MongoDB Atlas
MongoClient.connect(uri, options)
  .then((db) => {
    accountsDb = db;
    collection = accountsDb.db('test');
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
