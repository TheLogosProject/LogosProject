(function () {
  'use strict';

//REQUIRES
var express = require('express');
var pathwaysCtrl = require('./pathway.ctrl');
var config = require('../../config/environment');


var router = express.Router();

/////ENDPOINTS/////
router.get('/api/pathway', pathwaysCtrl.find);//GET PATHWAYS
router.post('/api/pathway', pathwaysCtrl.save);//SAVE PATHWAYS

module.exports = router;
}());
