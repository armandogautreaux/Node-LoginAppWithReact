const router = require('express').Router();
// const usersController = require('../../controllers/usersController');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('../../passport');
const salt = bcrypt.genSaltSync(10);

router.post('/register', (req, res) => {
  console.log('user signup');

  const { email, password, name } = req.body;
  // ADD VALIDATION
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log('User.js post error: ', err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${email}`
      });
    } else {
      const hash = bcrypt.hashSync(password, salt);
      const newUser = new User({
        name: name,
        email: email,
        password: hash
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signin', function(error, user, info) {
    if (error) {
      return res.status(500).json({
        message: 'Ooops, something happened',
        error: error.message || 'Inter server error'
      });
    }
    return res.json({
      message: 'User is now authenticated'
    });
  })(req, res, next);
});

router.post('/signin', function(req, res, next) {});
module.exports = router;
