const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:uuid', studentController.getStudentById);
router.put('/students/:uuid', studentController.updateStudent);
router.delete('/students/:uuid', studentController.deleteStudent);
module.exports = router;