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
  })
  .post('/', async (req, res, next) => {
    try {
      const ship = await Ship.insert(req.body);
      res.json(ship);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const ship = await Ship.updateById(id, req.body);
      res.json(ship);
    } catch (e) {
      next(e);
    }
  });
