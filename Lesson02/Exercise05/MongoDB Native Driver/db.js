<<<<<<< HEAD
/*Its assumed that you have already created a mongodb atlas cluster 
in previous exercise, Therefore, use the cluster credentials 
(username and password for mongodb atlas cluster) for this exercise */

//install mongodb using 'npm install mongodb'

=======
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
// Load mongodb module and create a mongoClient class instance
const MongoClient = require('mongodb').MongoClient;

// Declare a variable named uri and assign MongoDB connection string
<<<<<<< HEAD

var uri = "mongodb+srv://username:password@cluster0-0wi3e.mongodb.net/test?retryWrites=true";
=======
var uri = "mongodb+srv://<username>:<password> @cluster0-0wi3e.mongodb.net/test?retryWrites=true";
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc

// Declare a variable named option and assign optional settings

  const options = {
    reconnectTries: Number.MAX_VALUE,
<<<<<<< HEAD
    poolSize: 10,
    useNewUrlParser:true
=======
    poolSize: 10
>>>>>>> 8c0a98fe1daf3902bd0d351326c6815b0ca274cc
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
