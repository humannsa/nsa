
function ensureAuthenticated(req, res, next) {
  console.log(req.user);
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

function authenticateUser(req) {

}

exports.init = function(app, passport) {
  // GET /auth/humanapi
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  The first step in HumanAPI authentication will involve
  //   redirecting the user to humanapi.com.  After authorization, HumanAPI will
  //   redirect the user back to this application at /auth/humanapi/callback
  app.get('/auth/humanapi', passport.authenticate('humanapi'), function(req, res){
      // The request will be redirected to HumanAPI for authentication, so this
      // function will not be called.
  });

  // GET /auth/humanapi/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get('/auth/humanapi/callback',
    passport.authenticate('humanapi', { failureRedirect: '/close' }),
    function(req, res) {
      // Call /close if the auth process is opened in a popup
      res.redirect('/close');
      // otherwise call the home page etc.
      // res.redirect('/');
    });

  app.get('/login', function(req, res){
    res.render('login', {});
  });

  app.post('/login', function(req, res) {
    console.log("HEY! I GOt POST THNIGS: ", arguments);
    res.redirect('/login');
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

};
