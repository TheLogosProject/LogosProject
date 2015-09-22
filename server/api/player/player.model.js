'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name:                 String,
  age:                  Number,
  team:                 String,
  bye:                  String,
  position:             String,
  qty:                  Number, // todo -> add league variables
  projPts:              Number,
  paTD:                 Number,
  ruTD:                 Number,
  reTD:                 Number,
  paYds:                Number,
  ruYds:                Number,
  reYds:                Number,
  selected:             Boolean,
  imageFile:            String
});

module.exports = mongoose.model('Player', PlayerSchema);
