const Router = require('express');
const Ship = require('../models/Ship');

module.exports = Router()
  .get('/', async (req, res) => {
    const ships = await Ship.getAll();
    res.json(ships);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingShip = await Ship.getById(id);
    res.json(matchingShip);
  });
