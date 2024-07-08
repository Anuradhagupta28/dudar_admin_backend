const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/teachers', teacherController.createTeacher);
router.get('/teachers', teacherController.getAllTeachers);
router.get('/teachers/:uuid', teacherController.getTeacherById);
router.put('/teachers/:uuid', teacherController.updateTeacher);
router.delete('/teachers/:uuid', teacherController.deleteTeacher);
module.exports = router;