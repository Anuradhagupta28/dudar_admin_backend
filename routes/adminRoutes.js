const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();

router.get('/admin-panel-data', AdminController.getAdminPanelData);

module.exports = router;