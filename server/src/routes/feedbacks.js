const express = require('express')
const router = express.Router()
const FeedbackControllers = require('../app/controllers/Feedback.controller')

router.post('/add', FeedbackControllers.create);
router.get('/', FeedbackControllers.index);

module.exports = router