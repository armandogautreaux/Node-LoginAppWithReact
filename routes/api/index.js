const router = require('express').Router();
const usersRoutes = require('./users');

//User Routes
router.use('/users', usersRoutes);

module.exports = router;
