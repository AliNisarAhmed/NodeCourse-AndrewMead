
const express = require('express');
const app = express();
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  fs.appendFile('server.log', log + '\n', err => {
    if(err) {
      console.log('unable to log');
    }
  });
  console.log(log);
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
})

hbs.registerHelper('getYear', function() {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
});

app.get('/', function(req, res) {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    // year: new Date().getFullYear(),
    welcomeMessage: "Hey, welcome to my basic website"
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    // year: new Date().getFullYear()  //removed because of helper
  });
});


app.listen(3000, function() {
  console.log('server started');
});