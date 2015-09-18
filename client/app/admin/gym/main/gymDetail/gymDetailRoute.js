'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymDetail', {
                // will be :gymId when live
                url: '/gym/manage/:gymId',
                templateUrl: 'app/admin/gym/main/gymDetail/gymDetail.html',
                controller: 'gymDetailCtrl'
                // resolve: {
                //   gymInfo: function(gymDetailService) {
                //     return gymDetailService.getGym($routeParams.gymId);
                //   }
                // }
            });
    });
