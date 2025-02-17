"use strict";

var express = require('express');

var Question = require('../models/question');

var router = express.Router(); // Add a question

router.post('/', function _callee(req, res) {
  var _req$body, subject, text, options, correctOption, newQuestion;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, subject = _req$body.subject, text = _req$body.text, options = _req$body.options, correctOption = _req$body.correctOption;
          newQuestion = new Question({
            subject: subject,
            text: text,
            options: options,
            correctOption: correctOption
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newQuestion.save());

        case 5:
          res.status(201).json(newQuestion);
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
}); // Get all questions

router.get('/', function _callee2(req, res) {
  var questions;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Question.find());

        case 3:
          questions = _context2.sent;
          res.status(200).json(questions);
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