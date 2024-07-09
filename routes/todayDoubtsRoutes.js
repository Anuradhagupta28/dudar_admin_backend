const express = require('express');
const router = express.Router();

const todayDoubtsController = require('../controllers/todayDoubtsController');

router.post('/', todayDoubtsController.createTodayDoubt);
router.get('/', todayDoubtsController.getAllTodayDoubts);
router.get('/:id', todayDoubtsController.getTodayDoubtById);
router.put('/:id', todayDoubtsController.updateTodayDoubt);
router.delete('/:id', todayDoubtsController.deleteTodayDoubt);

module.exports = router;