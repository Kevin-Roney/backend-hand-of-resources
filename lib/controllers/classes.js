const Router = require('express');
const Class = require('../models/Class');

module.exports = Router()
  .get('/', async (req, res) => {
    const classes = await Class.getAll();
    res.json(classes);
  });
