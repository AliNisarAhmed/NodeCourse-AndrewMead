module.exports.add = (a, b) => a + b;

module.exports.square = (x) => x * x;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000)
}

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
}

module.exports.obj = {
  name: 'ali',
  surname: 'ahmed',
  age: 31,
  hobbies: 'learning JS'
};