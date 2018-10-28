const request = require('supertest');
const app = require('./server').app;

test('should return the correct response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect(res => {
      expect(res.body).toMatchObject({
        error: 'Page not found.'
      })
    })
    .end(done);
});

test('a specific user exists', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect(res => {
      expect(res.body).toEqual(expect.arrayContaining([
        {name: 'ali', age: 31}
      ]));
    })
    .end(done)
});