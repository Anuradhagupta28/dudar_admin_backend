const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/general-stats', adminController.getGeneralStats);
router.get('/call-stats', adminController.getCallStats);

module.exports = router;


