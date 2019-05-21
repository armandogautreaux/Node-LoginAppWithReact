const LocalStrategy = require('passport-local').Strategy;

const SignupStrategy = new LocalStrategy();

module.exports = SignupStrategy;
