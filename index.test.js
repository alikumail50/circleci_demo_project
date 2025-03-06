const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('responds with Hello, CircleCI!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, CircleCI!');
  });
});
