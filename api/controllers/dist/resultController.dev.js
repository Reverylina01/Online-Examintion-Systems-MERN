"use strict";

var express = require('express');

var Result = require('../models/result');

var router = express.Router(); // Submit exam results

router.post('/', function _callee(req, res) {
  var _req$body, user, exam, score, totalQuestions, correctAnswers, newResult;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, user = _req$body.user, exam = _req$body.exam, score = _req$body.score, totalQuestions = _req$body.totalQuestions, correctAnswers = _req$body.correctAnswers;
          newResult = new Result({
            user: user,
            exam: exam,
            score: score,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers
          });
          _context.next = 5;
          return regeneratorRuntime.awrap(newResult.save());

        case 5:
          res.status(201).json(newResult);
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
}); // Get results by user

router.get('/user/:id', function _callee2(req, res) {
  var results;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Result.find({
            user: req.params.id
          }).populate('exam'));

        case 3:
          results = _context2.sent;
          res.status(200).json(results);
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