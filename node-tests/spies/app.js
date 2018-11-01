const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email already exists
  // save the user to DB
  db.saveUser({ email, password });
  // send the welcome email
}