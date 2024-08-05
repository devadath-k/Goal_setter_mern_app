const express = require('express');
const router = express.Router();
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controlers/goalController');
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)


module.exports = router