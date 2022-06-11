const express = require('express');
const CategoriesService = require('./../services/categories.service');

const router = express.Router();
const service = new CategoriesService;

router.get('/', async (req, res) => {
  const found = await service.find();
  res.status(200).json(found);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const posted = await service.create(body);
  res.status(201).json(posted);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const patched = await service.update(id, body);
  res.status(200).json(patched);
})

router.delete('/:id', async (req, res) => {
const { id } = req.params;
const rta = await service.delete(id);
res.status(200).json(rta)
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const found = service.findOne(id);
  res.status(200).json(found);
});


module.exports = router;
