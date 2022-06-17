const Router = require('express');
const Longboard = require('../models/Longboard');

module.exports = Router()
  .get('/', async (req, res) => {
    const longboards = await Longboard.getAll();
    res.json(longboards);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingLongboard = await Longboard.getById(id);
    res.json(matchingLongboard);
  })
  .post('/', async (req, res, next) => {
    try {
      const longboard = await Longboard.insert(req.body);
      res.json(longboard);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const longboard = await Longboard.updateById(id, req.body);
      res.json(longboard);
    } catch (e) {
      next(e);
    }
  });

