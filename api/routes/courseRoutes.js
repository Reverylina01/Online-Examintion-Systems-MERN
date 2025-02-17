const express = require('express');
const { getAllCourses, getPremiumCourses } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/premium', getPremiumCourses);

module.exports = router;
