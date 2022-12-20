const express = require('express')
const router = express.Router()
const AccountControllers = require('../app/controllers/Account.controller');
const { verifyToken, verifyTokenAndAdmin } = require('../app/controllers/verifyToken.controller');

router.post('/sign-up', AccountControllers.create);
router.post('/login', AccountControllers.login);
router.get('/', AccountControllers.index);
router.get('/:id', AccountControllers.getAccount);
router.get('/delete/:id', AccountControllers.delete);
router.post('/update/:id', AccountControllers.update);
router.post('/refresh', AccountControllers.requestRefreshToken);
router.post('/logout', AccountControllers.logout);

module.exports = router