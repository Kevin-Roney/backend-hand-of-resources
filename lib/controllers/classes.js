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
  })
  .post('/', async (req, res, next) => {
    try {
      const classs = await Class.insert(req.body);
      res.json(classs);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const classes = await Class.updateById(id, req.body);
      res.json(classes);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Class.deleteById(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
