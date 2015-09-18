'use strict';

// access for master admin only

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymLanding', {
                url: '/gym/main',
                templateUrl: 'app/admin/gym/main/gymLanding/gymLanding.html',
                controller: 'gymLandingCtrl'                
            });
    });
