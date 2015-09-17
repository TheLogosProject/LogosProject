'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('addEditMove', {
                // will be :gymId when live
                url: '/gym/programming/path/logos/fundamentals/create/gymId',
                templateUrl: 'app/admin/gym/programming/logos/logosFundamentalsAddEdit.html'
            });
    });
