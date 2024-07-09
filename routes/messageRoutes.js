const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

router.post('/', messageController.createMessage);
router.get('/', messageController.getAllMessages);
router.get('/:uuid', messageController.getMessageById);
router.put('/:uuid', messageController.updateMessage);
router.delete('/:uuid', messageController.deleteMessage);

module.exports = router;