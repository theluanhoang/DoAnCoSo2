const express = require('express')
const router = express.Router()
const OrderControllers = require('../app/controllers/Order.controller');
const { verifyTokenAndAdmin } = require('../app/controllers/verifyToken.controller');

router.post('/add', OrderControllers.create);
router.get('/', OrderControllers.index);

module.exports = router