const Course = require('../models/course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching courses' });
    }
};

exports.getPremiumCourses = async (req, res) => {
    try {
        const courses = await Course.find({ premium: true });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching premium courses' });
    }
};
