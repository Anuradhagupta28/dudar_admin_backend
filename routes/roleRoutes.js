const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');


// User Routes
router.post('/postUser', roleController.createUser);
router.get('/getUsers', roleController.getAllUsers);
router.get('/getUser/:uuid', roleController.getUserById);
router.put('/editUser/:uuid', roleController.updateUser);
router.delete('/deleteUser/:uuid', roleController.deleteUser);

// SystemUser Routes
router.post('/postSystemUser', roleController.createSystemUser);
router.get('/getSystemUsers', roleController.getAllSystemUsers);
router.get('/getSystemUser/:uuid', roleController.getSystemUserById);
router.put('/editSystemUser/:uuid', roleController.updateSystemUser);
router.delete('/deleteSystemUser/:uuid', roleController.deleteSystemUser);

// MenuPermission Routes
router.post('/postMenuPermission', roleController.createMenuPermission);
router.get('/getMenuPermissions', roleController.getAllMenuPermissions);
router.get('/getMenuPermission/:uuid', roleController.getMenuPermissionById);
router.put('/editMenuPermission/:uuid', roleController.updateMenuPermission);
router.delete('/deleteMenuPermission/:uuid', roleController.deleteMenuPermission);

module.exports = router;
