const router = require('express').Router();
// const usersController = require('../../controllers/usersController');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('../../passport');
const salt = bcrypt.genSaltSync(10);

router.post('/register', (req, res) => {
  //assign new router under passpor.js
});

router.post('/signup', (req, res, next) => {
  //assign new router under passpor.js
});

module.exports = router;
