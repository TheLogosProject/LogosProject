'use strict';

var express = require('express');
var controller = require('./team.controller');

var router = express.Router();

router.get   ('/',                       controller.index);
router.get   ('/:userid/team/',          controller.get);
router.post  ('/:userid/team/:playerid', controller.addPlayer);
router.patch ('/:userid/team/', controller.nameTeam);
router.delete('/:userid/team/',          controller.removeAllPlayers);
router.delete('/:userid/team/:playerid', controller.removePlayer);

module.exports = router;
