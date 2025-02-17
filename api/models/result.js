const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true }
});

module.exports = mongoose.model('Result', ResultSchema);
