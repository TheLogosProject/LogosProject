(function () {
    'use strict';
    //REQUIRES
    var express = require('express');
    var controller = require('./user.ctrl');
    var config = require('../../config/environment');
    var auth = require('../../auth/auth.service');

    var router = express.Router();

    /////ENDPOINTS FOR USERS/////

    router.get('/', auth.hasRole('admin'), controller.index);//GET ALL USERS FROM DATABASE
    router.delete('/:id', auth.hasRole('admin'), controller.destroy);//DELETE SPECIFIC USER FROM DATABASE
    router.get('/me', auth.isAuthenticated(), controller.me);//
    router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
    router.get('/:id', auth.isAuthenticated(), controller.show);
    router.post('/', controller.create);
    router.get('/userInfo/:memberId', controller.findByID);//FIND SPECIFIC GYM
    router.get('/gym/:gymID', controller.getUsersByGym);//GET ALL USERS FROM SPECIFIC GYM
    router.get('/details/:memberId', controller.getUserDetails);//GET SPECIFIC USER DETAILS
    router.get('/logos/:memberId', controller.getUserLogos);//GET LOGOS PATHWAY FOR SPECIFIC USER
    router.get('/pathos/:memberId', controller.getUserPathos);//GET PATHOS PATHWAY FOR SPECIFIC USER
    router.get('/ethos/:memberId', controller.getUserEthos);//GET ETHOS PATHWAY FOR SPECIFIC USER
    router.put('/updateEval', controller.updateEvalStatus);//UPDATE EVALUATION WHEN CHANGES HAPPEN ON FRONT
    router.put('/updateAnswer', controller.updateAnswer);//UPDATE ANSWERS FROM KNOWLEDGE QUESTIONS
    router.put('/updateProgression', controller.updateProgression);//UPDATE OR ADD PROGRESSIONS FOR PHYSICAL ON FRONT
    router.put('/update', controller.updateUser);//GENERAL UPDATE USER ENDPOINT
    router.put('/update/isadmin', controller.userIsAdminUpdate);//UPDATE WHETHER USER IS ADMIN
    router.put('/update/isactive', controller.userIsActiveUpdate);//UPDATE WHETHER USER IS ACTIVE

    module.exports = router;

} ());
