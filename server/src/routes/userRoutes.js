const express = require('express');
const router = express.Router();
const upload = require('../utils/multerConfig');
const { uploadImage, postImageComments, getImages } = require('../controllers/userController');

// In your routes file
router.post('/upload', upload.single('file'), uploadImage);

// Comment Endpoint
router.post('/images/:id/comments', postImageComments);

router.get('/getImages', getImages);

module.exports = router;