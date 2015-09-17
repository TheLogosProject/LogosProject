'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('logosFundamentals', {
                // will be :gymId when live
                url: '/gym/programming/path/logos/fundamentals/gymId',
                templateUrl: 'app/admin/gym/programming/logos/logosFundamentals.html'
            });
    });
