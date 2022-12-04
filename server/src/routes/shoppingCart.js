const express = require('express')
const router = express.Router()
const shoppingCartControllers = require('../app/controllers/ShoppingCart.controller')

router.post('/add', shoppingCartControllers.create);
router.post('/', shoppingCartControllers.index);
router.post('/delete', shoppingCartControllers.delete);
router.post('/update-quantity', shoppingCartControllers.update);

module.exports = router