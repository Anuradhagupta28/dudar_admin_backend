const express = require('express');
const router = express.Router();

const doubtHistoryController = require('../controllers/doubtHistoryController');

router.post('/all', doubtHistoryController.createAll);
router.get('/all', doubtHistoryController.getAll);
router.get('/all/:id', doubtHistoryController.getAllById);
router.put('/all/:id', doubtHistoryController.updateAll);
router.delete('/all/:id', doubtHistoryController.deleteAll);


router.post('/schoolGroup', doubtHistoryController.createSchoolGroup);
router.get('/schoolGroup', doubtHistoryController.getAllSchoolGroups);
router.get('/schoolGroup/:id', doubtHistoryController.getSchoolGroupById);
router.put('/schoolGroup/:id', doubtHistoryController.updateSchoolGroup);
router.delete('/schoolGroup/:id', doubtHistoryController.deleteSchoolGroup);
module.exports = router;