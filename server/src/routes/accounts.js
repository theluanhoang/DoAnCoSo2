const express = require('express')
const router = express.Router()
const AccountControllers = require('../app/controllers/Account.controller');
const middlewareController = require('../app/controllers/Middleware.controller');

router.post('/sign-up', AccountControllers.create);
router.post('/login', AccountControllers.login);
router.get('/', AccountControllers.getCustomers);
// router.get('/', middlewareController.verifyToken, AccountControllers.index);
router.get('/:id', AccountControllers.getAccount);
// router.get('/delete/:id', middlewareController.verifyTokenAndAdminAuth, AccountControllers.delete);
router.get('/delete/:id', AccountControllers.delete);
router.post('/update/:id', AccountControllers.update);
router.post('/refresh', AccountControllers.requestRefreshToken);
router.post('/logout', middlewareController.verifyToken, AccountControllers.logout);

module.exports = router