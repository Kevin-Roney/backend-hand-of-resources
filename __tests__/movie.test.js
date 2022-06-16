const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET should return a list of movies', async () => {
    const resp = await request(app).get('/movies');
    expect(resp.status).toBe(200);
    expect(resp.body[0].id).toBe('1');
  });
  it('GET/:id should return a single movie', async () => {
    const resp = await request(app).get('/movies/1');
    expect(resp.status).toBe(200);
    expect(resp.body.id).toBe('1');
    expect(resp.body.title).toEqual('The Shawshank Redemption');
  });
  it('POST should create a new movie', async () => {
    const resp = await request(app)
      .post('/movies')
      .send({
        title: 'Hitchhikers Guide to the Galaxy',
        year: '2005',
        genre: 'Sci-Fi'
      });
    expect(resp.status).toBe(200);
    expect(resp.body.title).toEqual('Hitchhikers Guide to the Galaxy');
    expect(resp.body.year).toEqual(2005);
    expect(resp.body.genre).toEqual('Sci-Fi');
  });
  afterAll(() => {
    pool.end();
  });
});
