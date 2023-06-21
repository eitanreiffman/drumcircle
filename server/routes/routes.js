const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')



router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)

router.post('/signup', userController.createUser)

router.post('/login', userController.logInUser)

module.exports = router;