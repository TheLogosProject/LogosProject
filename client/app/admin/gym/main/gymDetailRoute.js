'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymDetail', {
                // will be :gymId when live
                url: '/gym/manage/gymId',
                templateUrl: 'app/admin/gym/main/gymDetail.html'
            });
    });
