const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// School Routes
router.post('/schools', schoolController.createSchool);
router.get('/schools', schoolController.getAllSchools);
router.get('/schools/:uuid', schoolController.getSchoolById);
router.put('/schools/:uuid', schoolController.updateSchool);
router.delete('/schools/:uuid', schoolController.deleteSchool);

// Branch Routes
router.post('/branches', schoolController.createBranch);
router.get('/branches', schoolController.getAllBranches);
router.get('/branches/:uuid', schoolController.getBranchById);
router.put('/branches/:uuid', schoolController.updateBranch);
router.delete('/branches/:uuid', schoolController.deleteBranch);

// StudentCode Routes
router.post('/student-codes', schoolController.createStudentCode);
router.get('/student-codes', schoolController.getAllStudentCodes);
router.get('/student-codes/:uuid', schoolController.getStudentCodeById);
router.put('/student-codes/:uuid', schoolController.updateStudentCode);
router.delete('/student-codes/:uuid', schoolController.deleteStudentCode);

router.post('/teacherCodes', schoolController.createTeacherCode);
router.get('/teacherCodes', schoolController.getAllTeacherCodes);
router.get('/teacherCodes/:uuid', schoolController.getTeacherCodeById);
router.put('/teacherCodes/:uuid', schoolController.updateTeacherCode);
router.delete('/teacherCodes/:uuid', schoolController.deleteTeacherCode);

router.post('/slotToTeacher', schoolController.createSlotToTeacher);
router.get('/slotToTeacher', schoolController.getAllSlotToTeachers);
router.get('/slotToTeacher/:uuid', schoolController.getSlotToTeacherById);
router.put('/slotToTeacher/:uuid', schoolController.updateSlotToTeacher);
router.delete('/slotToTeacher/:uuid', schoolController.deleteSlotToTeacher);

module.exports = router;