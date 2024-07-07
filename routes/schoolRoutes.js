const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// School Routes
router.post('/schools', schoolController.createSchool);
router.get('/schools', schoolController.getAllSchools);
router.get('/schools/:id', schoolController.getSchoolById);
router.put('/schools/:id', schoolController.updateSchool);
router.delete('/schools/:id', schoolController.deleteSchool);

// Branch Routes
router.post('/branches', schoolController.createBranch);
router.get('/branches', schoolController.getAllBranches);
router.get('/branches/:id', schoolController.getBranchById);
router.put('/branches/:id', schoolController.updateBranch);
router.delete('/branches/:id', schoolController.deleteBranch);

// StudentCode Routes
router.post('/student-codes', schoolController.createStudentCode);
router.get('/student-codes', schoolController.getAllStudentCodes);
router.get('/student-codes/:id', schoolController.getStudentCodeById);
router.put('/student-codes/:id', schoolController.updateStudentCode);
router.delete('/student-codes/:id', schoolController.deleteStudentCode);

module.exports = router;