// Awesome resource for jest testing and mocking
// https://flaviocopes.com/jest/

const db = require('./db');
const app = require('./app');

describe('App', () => {

  const dbSpy = jest.spyOn(db, "saveUser");

  test('should call the spy correctly', () => {
    const spy = jest.fn();
    spy('Ali', 31);
    expect(spy).toHaveBeenCalledWith('Ali', 31);
  });

  test('should call saveUser with user object', () => {
    let email = "ali.nisar@gmail.com";
    let password = 'abc123';

    app.handleSignup(email, password);
    expect(dbSpy).toHaveBeenCalledWith({ email, password });

  });
});