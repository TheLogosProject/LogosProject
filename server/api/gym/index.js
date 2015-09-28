(function () {
  'use strict';


var express = require('express');
var gymsCtrl = require('./gym.ctrl');
var config = require('../../config/environment');


var router = express.Router();

//think of these all as '/gym' + 'xxxxxx'
router.get('/', gymsCtrl.getAllGyms);
router.get('/names', gymsCtrl.getGymNames);
router.get('/details/:gymId', gymsCtrl.getGymDetails);
router.get('/pathway/:gymId', gymsCtrl.getGymPathway);//PROGRAMMING/GET GYM
router.post('/stage', gymsCtrl.getStages);//PROGRAMMING/GET STAGES
router.post('/evaluations', gymsCtrl.getEvaluations);//PROGRAMMING/GET EVALUATIONS
router.post('/evaluation/specifics', gymsCtrl.getSpecificEval);//PROGRAMMING/GET SPECIFIC EVALUATION
router.post('/', gymsCtrl.saveGym);
router.post('/add/evaluation', gymsCtrl.addEvaluation);//PROGRAMMING/ADDING EVAL
router.put('/update', gymsCtrl.updateGym);
router.put('/edit/evaluation', gymsCtrl.editEvaluation);//PROGRAMMING/EDIT EVAL
router.put('/removeById', gymsCtrl.removeById);//PROGRAMMING/DELETE EVAL

module.exports = router;

}());
