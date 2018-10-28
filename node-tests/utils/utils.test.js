const utils = require('./utils');

it('adds two values', function() {
  var res = utils.add(11, 33);
  expect(res).toBe(44);
});

it('squares a number', () => {
  var res = utils.square(4);
  expect(res).toBe(16);
});

test('checks the object for specific properties', () => {
  let res = utils.obj;
  expect(res).toHaveProperty('name', 'ali');
});

test('should async add two numbers', (done) => {
  utils.asyncAdd(3, 4, (sum) => {
    expect(sum).toBe(7);
    done();
  })
})

test('should async square', (done) => {
  utils.asyncSquare(4, (square) => {
    expect(square).toBe(16);
    done();
  })
})