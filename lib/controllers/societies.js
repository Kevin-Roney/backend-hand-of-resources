const Router = require('express');
const Society = require('../models/Society');

module.exports = Router()
  .get('/', async (req, res) => {
    const societies = await Society.getAll();
    res.json(societies);
  });
