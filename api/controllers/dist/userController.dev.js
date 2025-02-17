"use strict";

var express = require('express');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var User = require('../models/user');

var router = express.Router(); // Register a new user

router.post('/register', function _callee(req, res) {
  var _req$body, name, email, password, hashedPassword, newUser;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.next = 4;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 4:
          hashedPassword = _context.sent;
          newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
          });
          _context.next = 8;
          return regeneratorRuntime.awrap(newUser.save());

        case 8:
          res.status(201).json({
            message: 'User registered successfully'
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: _context.t0.message
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // Login user

router.post('/login', function _callee2(req, res) {
  var _req$body2, email, password, user, isMatch, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: 'User not found'
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", res.status(401).json({
            message: 'Invalid credentials'
          }));

        case 12:
          token = jwt.sign({
            id: user._id
          }, process.env.JWT_SECRET, {
            expiresIn: '1h'
          });
          res.status(200).json({
            token: token
          });
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 16]]);
});
module.exports = router;