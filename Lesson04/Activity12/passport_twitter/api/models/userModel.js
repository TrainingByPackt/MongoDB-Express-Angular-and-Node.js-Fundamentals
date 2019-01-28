'use strict';
const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const UserSchema = new Schema({
 
  twitter         : {
    fullName     : String,
    email        : String,
    createdOn: {
      type: Date,
      default: Date.now
    },
},
});

mongoose.model("User", UserSchema);
