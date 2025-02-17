"use strict";

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "default": 'student'
  } // student or admin

});
module.exports = mongoose.model('User', UserSchema);