'use strict';
module.exports = function(app,passport) {

app.get('/auth/twitter',
  passport.authenticate('twitter', {scope:"email"}));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success');
  });
}
