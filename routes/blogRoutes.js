const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');

// Author routes
router.post('/authors', blogController.createAuthor);
router.get('/authors', blogController.getAllAuthors);
router.get('/authors/:uuid', blogController.getAuthorById);
router.put('/authors/:uuid', blogController.updateAuthor);
router.delete('/authors/:uuid', blogController.deleteAuthor);

// Blog routes
router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:uuid', blogController.getBlogById);
router.put('/blogs/:uuid', blogController.updateBlog);
router.delete('/blogs/:uuid', blogController.deleteBlog);

module.exports = router;
