const express = require('express');
const router = express.Router();

const teacherQuizController = require('../controllers/teacherQuizController');

router.post('/', teacherQuizController.createTeacherQuiz);
router.get('/', teacherQuizController.getAllTeacherQuizzes);
router.get('/:id', teacherQuizController.getTeacherQuizById);
router.put('/:id', teacherQuizController.updateTeacherQuiz);
router.delete('/:id', teacherQuizController.deleteTeacherQuiz);

module.exports = router;