'use strict';
module.exports = function(app) {
  var userHandler = require('../controllers/userController');

  app
  .route("/auth/register")
  .post(userHandler.register);

  app
  .route("/auth/sign_in")
  .post(userHandler.signIn);

  app
  .route("/")
  .post(userHandler.loginRequired);
};