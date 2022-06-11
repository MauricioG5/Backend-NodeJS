const express = require('express');
const ShopOrdersService = require('./../services/shop-orders.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createShopOrderSchema, getShopOrderSchema } = require('./../schemas/shop-orders.shema');

const router = express.Router();
const service = new ShopOrdersService();

router.get('/', async (req, res, next) => {
  try {
    const shopOrder = await service.find();
    res.status(200).json(shopOrder);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createShopOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const posted = await service.create(body);
      res.status(201).json(posted);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',
  validatorHandler(getShopOrderSchema, 'params'),
  validatorHandler(createShopOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const patched = await service.update(id, body);
      res.status(200).json(patched);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getShopOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const found = await service.findOne(id);
      res.json(found);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getShopOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.status(200).json(rta);
    } catch (error) {
      next(error);
    }
  })

module.exports = router;
