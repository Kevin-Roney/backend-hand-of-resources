const Router = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .get('/', async (req, res) => {
    const movies = await Movie.getAll();
    res.json(movies);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingMovie = await Movie.getById(id);
    res.json(matchingMovie);
  })
  .post('/', async (req, res, next) => {
    try {
      const movie = await Movie.insert(req.body);
      res.json(movie);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = await Movie.updateById(id, req.body);
      res.json(movie);
    } catch (e) {
      next(e);
    }
  });

