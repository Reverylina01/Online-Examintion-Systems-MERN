const express = require('express');
const Exam = require('../models/exam');
const router = express.Router();

// Create an exam
router.post('/', async (req, res) => {
  try {
    const { title, subject, questions, createdBy } = req.body;
    const newExam = new Exam({ title, subject, questions, createdBy });
    await newExam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Get all exams
router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find().populate('questions');
    res.status(200).json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete exams by id
router.delete('/:id', async (req, res) => {
  try {
    const examID = req.params.id;

    // Check if the exam exists
    const exam = await Exam.findById(examID);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    // Delete the exam
    await exam.deleteOne();

    res.status(200).json({ message: 'Exam deleted successfully' });
  } catch (err) {
    console.error('Error deleting exam:', err);
    res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
});

// update exam
router.put('/:id', async (req, res) => {
  try {
    const examID = req.params.id;
    const updatedData = req.body;

    const exam = await Exam.findByIdAndUpdate(examID, updatedData, { new: true });

    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }

    res.status(200).json({ message: 'Exam updated successfully', exam });
  } catch (err) {
    console.error('Error updating exam:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// getExam by id 
const getExamById = async (req, res) => {
  try {
    const examId = req.params.id;
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    res.status(200).json(exam);
  } catch (err) {
    console.error('Error fetching exam:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
router.get('/:id', getExamById);


module.exports = router;
