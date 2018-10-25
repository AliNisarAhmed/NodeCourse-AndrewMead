const utils = require('./utils');

it('adds two values', function() {
  var res = utils.add(11, 33);
  if (res !== 44) {
    throw new Error('Expected 44, but got something else');
  }
});