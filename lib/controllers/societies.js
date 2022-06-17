const Router = require('express');
const Society = require('../models/Society');

module.exports = Router()
  .get('/', async (req, res) => {
    const societies = await Society.getAll();
    res.json(societies);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingSociety = await Society.getById(id);
    res.json(matchingSociety);
  });
