"use strict";

var express = require('express');

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var cors = require('cors');

dotenv.config();
var app = express();
app.use(cors());
app.use(express.json()); // Parse JSON requests
// Routes

var userRoutes = require('./api/controllers/userController');

var questionRoutes = require('./api/controllers/questionController');

var examRoutes = require('./api/controllers/examController');

var resultRoutes = require('./api/controllers/resultController');

app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/results', resultRoutes); // MongoDB connection

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB connected');
})["catch"](function (err) {
  return console.error(err);
}); // Start server

var PORT = 5001; // Change to an available port

app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});