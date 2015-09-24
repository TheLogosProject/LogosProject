'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                // will want to be /main/:id when live
                url: '/main',
                templateUrl: 'app/user/main/main.html',
                controller: 'mainCtrl',
                resolve: {
                    userObj: function ($stateParams, userService) {
                        var id = $stateParams.id;
                        return userService.getUserByID(id);
                    }
                }
            });
    });

    //put comma back in userLandingCtrl
