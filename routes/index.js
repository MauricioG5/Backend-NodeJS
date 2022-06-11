const express = require('express');
const mainRouter = require('./main.router');
const usersRouter = require('./users.router');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const shopOrdersRouter = require('./shop-orders.router');

function routerApi(app) {
const router = express.Router();
app.use('/api/v1', router);
router.use('/', mainRouter);
router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/categories', categoriesRouter);
router.use('/shop-orders', shopOrdersRouter);
}

module.exports = routerApi;
