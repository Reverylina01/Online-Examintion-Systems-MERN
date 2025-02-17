const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: String, required: true }
});

module.exports = mongoose.model('Question', QuestionSchema);
