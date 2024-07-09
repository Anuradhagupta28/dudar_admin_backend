const express = require('express');
const router = express.Router();
const onlineTeacherController = require('../controllers/onlineTeacherController');
router.post('/', onlineTeacherController.createOnlineTeacher);
router.get('/', onlineTeacherController.getAllOnlineTeachers);
router.get('/:uuid', onlineTeacherController.getOnlineTeacherById);
router.put('/:uuid', onlineTeacherController.updateOnlineTeacher);
router.delete('/:uuid', onlineTeacherController.deleteOnlineTeacher);

module.exports = router;