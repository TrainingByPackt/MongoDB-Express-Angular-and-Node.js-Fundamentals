'use strict';
module.exports = function(app,passport) {

app.get('/auth/facebook',
  passport.authenticate('facebook', {scope:"email"}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success');
  });
}
