'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('programming', {
                // will be :gymId when live
                url: '/gym/programming/gymId',
                templateUrl: 'app/admin/gym/programming/programmingLanding.html'
            });
    });
