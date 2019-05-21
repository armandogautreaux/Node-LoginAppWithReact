const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

const SigninStrategy = new LocalStrategy(function(username, password, done) {
  const user = username;
  done(null, 'user signed up');
});

module.exports = SigninStrategy;
