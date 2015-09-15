'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('gymDetail', {
    // will want to be /gym/:id when live
      url: '/gym/id',
      templateUrl: 'app/admin/gym/gymDetail.html'
    });
  });
