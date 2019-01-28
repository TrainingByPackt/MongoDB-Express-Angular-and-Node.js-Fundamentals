`javascript`
const mongoose = require("mongoose");

var uri = "mongodb+srv://paulappz:asdfasdf@cluster0-0wi3e.mongodb.net/test?retryWrites=true";

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };

  mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

// require any models

require("../api/models/userModel");