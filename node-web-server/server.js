
const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

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