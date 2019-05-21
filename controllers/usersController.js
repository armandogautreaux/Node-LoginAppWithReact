const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  register: (req, res) => {
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
  }
};
