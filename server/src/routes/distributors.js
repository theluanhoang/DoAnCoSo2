const express = require('express')
const router = express.Router()
const DistributorControllers = require('../app/controllers/Distributor.controller');
const { verifyTokenAndAdmin } = require('../app/controllers/verifyToken.controller');

router.post('/add', DistributorControllers.create);
router.get('/', DistributorControllers.index);
router.get('/:id', DistributorControllers.getDistributor);

module.exports = router