const express = require('express');
const router = express.Router();
const studentQuizController = require('../controllers/studentQuizController');

router.post('/', studentQuizController.createStudentQuiz);
router.get('/', studentQuizController.getAllStudentQuizzes);
router.get('/:uuid', studentQuizController.getStudentQuizById);
router.put('/:uuid', studentQuizController.updateStudentQuiz);
router.delete('/:uuid', studentQuizController.deleteStudentQuiz);

module.exports = router;