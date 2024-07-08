const express = require('express');
const contentController = require('../controllers/contentController');

const router = express.Router();

router.post('/postExam', contentController.createExam);
router.get('/getExam', contentController.getAllExam);
router.get('/getExam/:uuid', contentController.getExamById);
router.put('/editExam/:uuid', contentController.updateExam);
router.delete('/deleteExam/:uuid', contentController.deleteExam);
// for subject
router.post('/postSub', contentController.createSubject);
router.get('/getSub', contentController.getAllSubjects);
router.get('/getSub/:uuid', contentController.getSubjectById);
router.put('/editSub/:uuid', contentController.updateSubject);
router.delete('/deleteSub/:uuid', contentController.deleteSubject);

// for Chapter
router.post('/postChapter', contentController.createChapter);
router.get('/getChapters', contentController.getAllChapters);
router.get('/getChapter/:uuid', contentController.getChapterById);
router.put('/editChapter/:uuid', contentController.updateChapter);
router.delete('/deleteChapter/:uuid', contentController.deleteChapter);

// for Author
router.post('/postAuthor', contentController.createAuthor);
router.get('/getAuthors', contentController.getAllAuthors);
router.get('/getAuthor/:uuid', contentController.getAuthorById);
router.put('/editAuthor/:uuid', contentController.updateAuthor);
router.delete('/deleteAuthor/:uuid', contentController.deleteAuthor);


module.exports = router;