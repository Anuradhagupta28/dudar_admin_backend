const express = require('express');
const router = express.Router();
const onlineTeacherController = require('../controllers/onlineTeacherController');
router.post('/onlineTeachers', onlineTeacherController.createOnlineTeacher);
router.get('/onlineTeachers', onlineTeacherController.getAllOnlineTeachers);
router.get('/onlineTeachers/:uuid', onlineTeacherController.getOnlineTeacherById);
router.put('/onlineTeachers/:uuid', onlineTeacherController.updateOnlineTeacher);
router.delete('/onlineTeachers/:uuid', onlineTeacherController.deleteOnlineTeacher);

module.exports = router;