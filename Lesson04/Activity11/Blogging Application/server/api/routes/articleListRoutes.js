'use strict';
module.exports = function(app) {
  var articleList = require('../controllers/articleListController');
  var userHandlers = require('../controllers/userController');

  // articleList Routes
  app
  .route("/articles")
  .get(articleList.listAllArticles)
  .post(userHandlers.loginRequired, articleList.createNewArticle);

 app
  .route("/article/:articleid")
  .get(articleList.readArticle)
  .put(articleList.updateArticle)
  .delete(articleList.deleteArticle);

  app
  .route("/articles/by/:tag")
  .get(articleList.listTagArticles);

  app
  .route("/auth/register")
  .post(userHandlers.register);

  app
  .route("/auth/sign_in")
  .post(userHandlers.signIn);

};