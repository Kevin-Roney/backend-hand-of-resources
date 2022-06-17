const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should return a list of ships', async () => {
    const resp = await request(app).get('/ships');
    expect(resp.status).toBe(200);
    expect(resp.body[0].id).toBe('1');
  });
  it('GET/:id should return a single ship', async () => {
    const resp = await request(app).get('/ships/1');
    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe('1');
    expect(resp.body.name).toEqual('Sloop');
    expect(resp.body.cannons).toEqual(2);
  });
  afterAll(() => {
    pool.end();
  });
});
