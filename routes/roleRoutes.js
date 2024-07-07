const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');


// User Routes
router.post('/postUser', roleController.createUser);
router.get('/getUsers', roleController.getAllUsers);
router.get('/getUser/:id', roleController.getUserById);
router.put('/editUser/:id', roleController.updateUser);
router.delete('/deleteUser/:id', roleController.deleteUser);

// SystemUser Routes
router.post('/postSystemUser', roleController.createSystemUser);
router.get('/getSystemUsers', roleController.getAllSystemUsers);
router.get('/getSystemUser/:id', roleController.getSystemUserById);
router.put('/editSystemUser/:id', roleController.updateSystemUser);
router.delete('/deleteSystemUser/:id', roleController.deleteSystemUser);

// MenuPermission Routes
router.post('/postMenuPermission', roleController.createMenuPermission);
router.get('/getMenuPermissions', roleController.getAllMenuPermissions);
router.get('/getMenuPermission/:id', roleController.getMenuPermissionById);
router.put('/editMenuPermission/:id', roleController.updateMenuPermission);
router.delete('/deleteMenuPermission/:id', roleController.deleteMenuPermission);

module.exports = router;
