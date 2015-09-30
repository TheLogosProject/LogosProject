(function () {
  'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymDetail', {
                url: '/gym/manage/:gymId',
                templateUrl: 'app/admin/gym/main/gymDetail/gymDetail.html',
                controller: 'gymDetailCtrl'
            });
    });
}());
