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
  it('POST should create a new ship', async () => {
    const resp = await request(app)
      .post('/ships')
      .send({
        name: 'Rowboat',
        cannons: 1
      });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Rowboat');
    expect(resp.body.cannons).toEqual(1);
  });
  it('PUT /ships/:id should update a ship', async () => {
    const resp = await request(app)
      .put('/ships/1')
      .send({ name: 'Sloooop' });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Sloooop');
  });
  it('DELETE /ships/:id should delete a ship', async () => {
    const beforeDelete = await request(app).get('/ships');
    const resp = await request(app).delete('/ships/2');
    expect(resp.status).toBe(200);
    const { body } = await request(app).get('/ships');
    expect(body.length).toBeLessThan(beforeDelete.body.length);
  });
  afterAll(() => {
    pool.end();
  });
});
