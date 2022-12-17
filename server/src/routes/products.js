const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router()
const ProductControllers = require('../app/controllers/Product.controller');
const { verifyTokenAndAdmin, verifyToken } = require('../app/controllers/verifyToken.controller');

router.post('/add', ProductControllers.create);
router.get('/', ProductControllers.index);
router.post('/order', verifyToken, ProductControllers.order);
router.get('/:id', ProductControllers.getProduct);
router.get('/delete/:id', verifyTokenAndAdmin ,ProductControllers.delete);
router.post('/update/:id', ProductControllers.update);
router.get('/search/:key', ProductControllers.search);

module.exports = router