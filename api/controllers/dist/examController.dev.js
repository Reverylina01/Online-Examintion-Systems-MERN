"use strict";

var express = require('express');

var Exam = require('../models/exam');

var router = express.Router(); // Create an exam

router.post('/', function _callee(req, res) {
  var _req$body, title, subject, questions, createdBy, newExam;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, title = _req$body.title, subject = _req$body.subject, questions = _req$body.questions, createdBy = _req$body.createdBy;
          newExam = new Exam({
            title: title,
            subject: subject,
            questions: questions,
            createdBy: createdBy
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newExam.save());

        case 5:
          res.status(201).json(newExam);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Get all exams

router.get('/', function _callee2(req, res) {
  var exams;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Exam.find().populate('questions'));

        case 3:
          exams = _context2.sent;
          res.status(200).json(exams);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;