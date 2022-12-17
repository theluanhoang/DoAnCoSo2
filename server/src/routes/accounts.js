const express = require('express')
const router = express.Router()
const AccountControllers = require('../app/controllers/Account.controller');
const { verifyToken, verifyTokenAndAdmin } = require('../app/controllers/verifyToken.controller');

router.post('/sign-up', AccountControllers.create);
router.post('/login', AccountControllers.login);
router.get('/', verifyToken, AccountControllers.index);
router.get('/:id', verifyToken, AccountControllers.getAccount);
router.get('/delete/:id', verifyTokenAndAdmin, AccountControllers.delete);
router.post('/update/:id', verifyTokenAndAdmin, AccountControllers.update);
router.post('/refresh', AccountControllers.requestRefreshToken);
router.post('/logout', verifyToken, AccountControllers.logout);

module.exports = router