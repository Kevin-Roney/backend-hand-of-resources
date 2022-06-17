const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should return a list of ffxiv classes', async () => {
    const resp = await request(app).get('/classes');
    expect(resp.status).toBe(200);
    expect(resp.body[0].id).toBe('1');
  });
  it('GET/:id should return a single ffxiv class', async () => {
    const resp = await request(app).get('/classes/1');
    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe('1');
    expect(resp.body.name).toEqual('Warrior');
  });
  it('POST should create a new ffxiv class', async () => {
    const resp = await request(app)
      .post('/classes')
      .send({
        name: 'Dancer',
        type: 'DPS'
      });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Dancer');
    expect(resp.body.type).toEqual('DPS');
  });
  it('PUT /classes/:id should update a ffxiv class', async () => {
    const resp = await request(app)
      .put('/classes/14')
      .send({ name: 'Dragoon' });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('Dragoon');
  });
  it('DELETE /classes/:id should delete a ffxiv class', async () => {
    const beforeDelete = await request(app).get('/classes');
    const resp = await request(app).delete('/classes/2');
    expect(resp.status).toBe(200);
    const { body } = await request(app).get('/classes');
    expect(body.length).toBeLessThan(beforeDelete.body.length);
  });
  afterAll(() => {
    pool.end();
  });
});
