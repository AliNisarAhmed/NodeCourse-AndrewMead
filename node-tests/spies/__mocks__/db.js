const db = require.requireActual('../db.js');

module.exports.saveUser = (user) => {
  console.log('saving the user', user);
} 