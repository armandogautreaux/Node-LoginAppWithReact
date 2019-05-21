//DEPENDENCIES
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('./passport');
const app = express();
const routes = require('./routes');

//PORT
const PORT = process.env.PORT || 8080;

//MIDDLEARE MORGAN
app.use(morgan('dev'));

//MIDLEWARE - USING EXPRESS INSTEAD OF 'BODYPARSER'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/loginpapp', {
  useNewUrlParser: true
});

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//CIRCULAR DEPENDENCY TO USE ROUTES
app.use(routes);

//INITIZLIZE PASSPORT
app.use(passport.initialize());
//app.use(passport.session())

//INITIALIZE APP
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
