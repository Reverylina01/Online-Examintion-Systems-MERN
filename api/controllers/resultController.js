const express = require('express');
const Result = require('../models/result');
const router = express.Router();

// Submit exam results
router.post('/', async (req, res) => {
  try {
    const { user, exam, score, totalQuestions, correctAnswers } = req.body;
    const newResult = new Result({ user, exam, score, totalQuestions, correctAnswers });
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get results by user
router.get('/user/:id', async (req, res) => {
  try {
    const results = await Result.find({ user: req.params.id }).populate('exam');
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
