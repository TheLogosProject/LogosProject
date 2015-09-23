(function () {
  'use strict';


var express = require('express');
var gymsCtrl = require('./gym.ctrl');
var config = require('../../config/environment');


var router = express.Router();


router.get('/api/gym', gymsCtrl.getAllGyms);
router.get('/api/gym-names', gymsCtrl.getGymNames);
router.get('/api/gym-details/:gymId', gymsCtrl.getGymDetails);
router.get('/api/gym-pathway/:gymId', gymsCtrl.getGymPathway);//PROGRAMMING/GET GYM
router.post('/api/gym-stage', gymsCtrl.getStages);//PROGRAMMING/GET STAGES
router.post('/api/gym-evaluations', gymsCtrl.getEvaluations);//PROGRAMMING/GET EVALUATIONS
router.post('/api/gym-evaluation-specifics', gymsCtrl.getSpecificEval);//PROGRAMMING/GET SPECIFIC EVALUATION
router.post('/api/gym', gymsCtrl.saveGym);
router.post('/api/gym-add-evaluation', gymsCtrl.addEvaluation);//PROGRAMMING/ADDING EVAL
router.put('/api/gym-update', gymsCtrl.updateGym);
router.put('/api/gym-edit-evaluation', gymsCtrl.editEvaluation);//PROGRAMMING/EDIT EVAL

module.exports = router;

}());
