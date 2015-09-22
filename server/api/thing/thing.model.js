'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  time: Number
});

module.exports = mongoose.model('Thing', ThingSchema);
