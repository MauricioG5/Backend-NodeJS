const express = require('express');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, getUserSchema, createUserSchema } = require('./../schemas/users.schema')
const UsersService = require('./../services/users.service')

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.status(200).json(users);
});

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const newUser = req.body;
      const created = await service.create(newUser);
      res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await service.delete(id);
      res.status(200).json(deleted);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/query-params', async (req, res, next) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const changes = req.body;
      const patched = await service.update(id, changes);
      res.status(200).json(patched);
    } catch (error) {
      next(error);
    }
  });




router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const found = await service.findOne(id);
      res.status(200).json(found);
    } catch (error) {
      next(error);
    }
  });







module.exports = router;
