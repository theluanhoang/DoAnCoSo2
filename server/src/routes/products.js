const express = require('express');
const router = express.Router()
const ProductControllers = require('../app/controllers/Product.controller');

router.post('/add', ProductControllers.create);
router.get('/', ProductControllers.index);
router.post('/order', ProductControllers.order);
router.get('/:id', ProductControllers.getProduct);
router.get('/delete/:id' ,ProductControllers.delete);
router.post('/update/:id', ProductControllers.update);
router.get('/search/:key', ProductControllers.search);

module.exports = router