(function () {
  'use strict';


var express = require('express');
var pathwaysCtrl = require('./pathway.ctrl');
var config = require('../../config/environment');


var router = express.Router();


router.get('/api/pathway', pathwaysCtrl.find);
router.post('/api/pathway', pathwaysCtrl.save);

module.exports = router;

}());
