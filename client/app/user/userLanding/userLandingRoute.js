'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('userLanding', {
                // will want to be /userLanding/:id when live
                url: '/userLanding',
                templateUrl: 'app/user/userLanding/userLanding.html',
                controller: 'userLandingCtrl'
                // resolve: {
                //     userObj: function ($stateParams, userService) {
                //         var id = $stateParams.id;
                //         return userService.getUserByID(id);
                //     }
                // }
            });
    });

    //put comma back in userLandingCtrl
