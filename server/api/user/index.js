(function () {
    'use strict';


    var express = require('express');
    var controller = require('./user.ctrl');
    var config = require('../../config/environment');
    var auth = require('../../auth/auth.service');

    var router = express.Router();

    //think of '/api/user' +'xxx'

    router.get('/', auth.hasRole('admin'), controller.index);
    router.delete('/:id', auth.hasRole('admin'), controller.destroy);
    router.get('/me', auth.isAuthenticated(), controller.me);
    router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
    router.get('/:id', auth.isAuthenticated(), controller.show);
    router.post('/', controller.create);

    //Mike
    // router.get('/', controller.getAllUsers);
    router.get('/userInfo/:memberId', controller.findByID);
    router.get('/gym/:gymID', controller.getUsersByGym);
    router.get('/details/:memberId', controller.getUserDetails);
    router.get('-logos/:memberId', controller.getUserLogos);
    router.get('-logos/physical', controller.getUserLogos);
    router.get('-pathos/:memberId', controller.getUserPathos);
    router.get('-ethos/:memberId', controller.getUserEthos);
    router.put('/updateEval', controller.updateEvalStatus);
    router.put('/updateAnswer', controller.updateAnswer);
    router.put('/updateProgression', controller.updateProgression);

    // router.post('-add', controller.addUser);
    router.put('/update', controller.updateUser);
    router.put('/update/isadmin', controller.userIsAdminUpdate);
    router.put('/update/isactive', controller.userIsActiveUpdate);



    module.exports = router;

} ());
