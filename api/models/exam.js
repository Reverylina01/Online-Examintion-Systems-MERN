const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: Number, required: true }
});

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  questions: [QuestionSchema], // Embedded questions
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Exam', ExamSchema);
