const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

router.post('/postExam', contentController.createContent);
router.get('/getExam', contentController.getAllContent);
router.get('/:id', contentController.getContentById);
router.put('/:id', contentController.updateContent);
router.delete('/deleteExam/:id', contentController.deleteContent);

module.exports = router;