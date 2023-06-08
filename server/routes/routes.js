const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')



router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)


router.get('/signup', userController.getSignUp)
router.post('/signup', userController.createUser)

module.exports = router;