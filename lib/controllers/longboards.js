const Router = require('express');
const Longboard = require('../models/Longboard');

module.exports = Router()
  .get('/', async (req, res) => {
    const longboards = await Longboard.getAll();
    res.json(longboards);
  });
