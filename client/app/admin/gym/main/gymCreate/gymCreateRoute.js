'use strict';

// access for master admin only

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymCreate', {
                url: '/gym/main/create',
                templateUrl: 'app/admin/gym/main/gymCreate/gymCreate.html',
                controller: 'gymCreateCtrl'
            });
    });
