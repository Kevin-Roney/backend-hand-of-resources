const Router = require('express');
const Class = require('../models/Class');

module.exports = Router()
  .get('/', async (req, res) => {
    const classes = await Class.getAll();
    res.json(classes);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingClass = await Class.getById(id);
    res.json(matchingClass);
  });
