const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should return a list of longboards', async () => {
    const resp = await request(app).get('/longboards');
    expect(resp.status).toBe(200);
    expect(resp.body[0].id).toBe('1');
  });
  it('GET/:id should return a single longboard', async () => {
    const resp = await request(app).get('/longboards/1');
    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe('1');
    expect(resp.body.name).toEqual('Cheesegrater');
  });
  it('POST should create a new longboard', async () => {
    const resp = await request(app)
      .post('/longboards')
      .send({
        name: 'Vanguard',
        brand: 'Loaded',
        price: 184
      });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Vanguard');
    expect(resp.body.brand).toEqual('Loaded');
    expect(resp.body.price).toEqual(184);
  });
  it('PUT /longboards/:id should update a longboard', async () => {
    const resp = await request(app)
      .put('/longboards/1')
      .send({ name: 'Vangerrrrrd' });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Vangerrrrrd');
  });
  it('DELETE /longboards/:id should delete a longboard', async () => {
    const beforeDelete = await request(app).get('/longboards');
    const resp = await request(app).delete('/longboards/1');
    expect(resp.status).toBe(200);
    const { body } = await request(app).get('/longboards');
    expect(body.length).toBeLessThan(beforeDelete.body.length);
  });
  afterAll(() => {
    pool.end();
  });
});
