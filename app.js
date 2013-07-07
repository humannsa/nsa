var express = require('express');
var passport = require('passport');
var util = require('util');
var HumanApiStrategy = require('passport-humanapi').Strategy;

// Configure the application with you generated App ID and App Secret
var HUMANAPI_APP_ID     =  "df2131e5321400375f0e12acba05ca99752ada8f";
var HUMANAPI_APP_SECRET =  "0ad1da70b1e93d6aef56130326f38d2fefaa8b90";

var authentication = require("./routes/authentication");
var trainer = require("./routes/trainer");
var client = require("./routes/client");
var util = require("./routes/util");

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete HumanAPI profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Use the HumanApiStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and HumanAPI
//   profile), and invoke a callback with a user object.
passport.use(new HumanApiStrategy({
    clientID:     HUMANAPI_APP_ID,
    clientSecret: HUMANAPI_APP_SECRET,
    callbackURL:  "http://localhost:3000/auth/humanapi/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      console.log("HUMAN API PROFILE DATA")
      console.log(accessToken)
      console.log(refreshToken)
      console.log(profile)
      // To keep the example simple, the user's HumanAPI profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the HumanAPI account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));



// Instantiate the application
var app = express();

// configure Express
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  // app.use(express.logger()); //dev environment logger
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'jodelahuhu' }));
  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

// Calling close works well when the authentication flow is opened up in a popup or modal window
app.get('/close', function(req, res){
  res.render('close');
});

// Initialize Authentication Routes
authentication.init(app,passport);
util.init(app);
client.init(app);
trainer.init(app);

console.log("app.routes: ", app.routes);

// Start the app server
app.listen(app.get('port'), function(){
  console.log("[NSA APP ACTIVATED] Express server listening on port " + app.get('port'));
});
