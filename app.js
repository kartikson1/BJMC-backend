var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  cookieParser = require('cookie-parser'),
  LocalStrategy = require('passport-local'),
  flash = require('connect-flash'),
  session = require('express-session'),
  Blog = require('./models/Blog'),
  User = require('./models/User'),
  methodOverride = require('method-override');

const connectDB = require('./config/db');

connectDB();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/blogs', (req, res) => {
  res.render('blogs');
});

app.post('/blogs/new', (req, res) => {
  //want to get data from form and add to campground
  var name = req.body.name;
  var image = req.body.image;
  var content = req.body.content;
  var title = req.body.title;
  var user = {
    id: req.user._id,
    username: req.user.email,
  };
  var newCampground = {
    name: name,
    image: image,
    description: desc,
    user: user,
    price: price,
  };
  //add the campground to database
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log('Something went wrong');
    } else {
      //redirect back to campground to display
      res.redirect('/campgrounds');
    }
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/articles', (req, res) => {
  res.render('articles');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server Has Started!');
});
