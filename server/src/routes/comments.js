const express = require('express')
const router = express.Router()
const CommentControllers = require('../app/controllers/Comment.controller')

router.get('/:id', CommentControllers.getComment);

module.exports = router