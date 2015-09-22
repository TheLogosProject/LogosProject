'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Player = require('../player/player.model');
var TeamSchema = new Schema({
  name:     String,
  //Dr Mike's idea=====
  players:  [{
    type : Schema.Types.ObjectId,
    ref  : 'Player'
  }]
});

module.exports = mongoose.model('Team', TeamSchema);
