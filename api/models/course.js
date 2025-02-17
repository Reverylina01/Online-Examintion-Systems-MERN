const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    premium: { type: Boolean, default: false }
});

module.exports = mongoose.model('Course', CourseSchema);
