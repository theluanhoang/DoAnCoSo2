const express = require('express')
const router = express.Router()
const CategoryControllers = require('../app/controllers/Category.controller')

router.post('/add', CategoryControllers.create);
router.get('/', CategoryControllers.index);
router.get('/:id', CategoryControllers.getCategory);

module.exports = router