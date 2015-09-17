'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('addEditMove', {
                // will be :gymId when live
                url: '/gym/programming/gymId/fundamentals/create',
                templateUrl: 'app/admin/gym/programming/logos/fundamentals/logosFundamentalsAddEdit.html'
            });
    });
