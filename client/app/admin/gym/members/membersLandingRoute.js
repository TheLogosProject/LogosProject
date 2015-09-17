'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('membersLanding', {
                // will be :gymId when live
                url: '/gym/members/gymId',
                templateUrl: 'app/admin/gym/members/membersLanding.html'
            });
    });
