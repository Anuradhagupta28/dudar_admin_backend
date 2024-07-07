const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

router.post('/postExam', contentController.createExam);
router.get('/getExam', contentController.getAllExam);
router.get('/getExam/:id', contentController.getExamById);
router.put('/editExam/:id', contentController.updateExam);
router.delete('/deleteExam/:id', contentController.deleteExam);
// for subject
router.post('/postSub', contentController.createSubject);
router.get('/getSub', contentController.getAllSubjects);
router.get('/getSub/:id', contentController.getSubjectById);
router.put('/editSub/:id', contentController.updateSubject);
router.delete('/deleteSub/:id', contentController.deleteSubject);

// for Chapter
router.post('/postChapter', contentController.createChapter);
router.get('/getChapters', contentController.getAllChapters);
router.get('/getChapter/:id', contentController.getChapterById);
router.put('/editChapter/:id', contentController.updateChapter);
router.delete('/deleteChapter/:id', contentController.deleteChapter);

// for Author
router.post('/postAuthor', contentController.createAuthor);
router.get('/getAuthors', contentController.getAllAuthors);
router.get('/getAuthor/:id', contentController.getAuthorById);
router.put('/editAuthor/:id', contentController.updateAuthor);
router.delete('/deleteAuthor/:id', contentController.deleteAuthor);


module.exports = router;