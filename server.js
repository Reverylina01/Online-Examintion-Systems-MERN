const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import database connection function
const connectToMongoDB = require('./api/config/db');

// Import Routes
const userController = require('./api/controllers/userController');
const questionController = require('./api/controllers/questionController');
const examController = require('./api/controllers/examController');
const resultController = require('./api/controllers/resultController');
const categoryController = require('./api/controllers/categoryController');
const { adminsignup, adminlogin } = require('./api/controllers/userController');

// Additional Routes
app.use('/api/courses', require('./api/routes/courseRoutes'));
app.use('/api/payment', require('./api/routes/paymentRoutes'));

// Connect to MongoDB
connectToMongoDB()
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit if database connection fails
  });

// Define API routes
app.use('/api/users', userController);
app.use('/api/questions', questionController);
app.use('/api/exams', examController);
app.use('/api/results', resultController);

// Category Routes
app.post('/api/categorys/add', categoryController.createCategory);
app.get('/api/categorys/list', categoryController.getAllCategories);
app.get('/api/categorys/:cid', categoryController.getCategoryById);
app.put('/api/categorys/:cid', categoryController.updateCategory);
app.delete('/api/categorys/:cid', categoryController.deleteCategoryById);

// Admin Registration
app.post(
  '/adminusers',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email format'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    adminsignup(req, res);
  }
);

// Admin Login
app.post(
  '/adminlogin',
  [
    check('email').normalizeEmail().isEmail().withMessage('Invalid email format'),
    check('password').not().isEmpty().withMessage('Password is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    adminlogin(req, res);
  }
);

// Default route for unmatched endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
const PORT = process.env.PORT || 5001; // Standardized port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
