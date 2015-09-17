'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('addEditMove', {
                // will be :gymId when live
                url: '/gym/programming/movement/create/gymId',
                templateUrl: 'app/admin/addEditMove/addEditMove.html'
            });
    });
