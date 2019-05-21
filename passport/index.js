const passport = requier('passport');

const SignupStrategy = require('./signupStrategy');
const SigninStrategy = require('./signinStrategy');

passport.use('local-signin', SigninStrategy);
passport.use('local-signup', SignupStrategy);

module.exports = passport;
