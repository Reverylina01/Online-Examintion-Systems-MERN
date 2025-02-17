const express = require('express');
const Question = require('../models/question');
const router = express.Router();

// Add a question
router.post('/', async (req, res) => {
  try {
    const { subject, text, options, correctOption } = req.body;
    const newQuestion = new Question({ subject, text, options, correctOption });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
