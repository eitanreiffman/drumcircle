const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')
const userController = require('../controllers/userController')
const artistController = require('../controllers/artistController');
const authenticateToken = require('../auth');



router.get('/posts', postController.getPosts)
router.post('/posts', postController.createPost)

router.post('/signup', userController.createUser)
router.post('/login', userController.logInUser)

router.post('/artists', authenticateToken, artistController.createArtist)

module.exports = router;