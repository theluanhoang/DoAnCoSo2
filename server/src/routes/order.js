const express = require('express')
const router = express.Router()
const OrderControllers = require('../app/controllers/Order.controller')

router.post('/add', OrderControllers.create);
router.get('/', OrderControllers.index);

module.exports = router