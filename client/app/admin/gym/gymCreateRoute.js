'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('gymCreate', {
    // will want to be /gym/:id when live
      url: '/gym/create',
      templateUrl: 'app/admin/gym/gymCreate.html'
    });
  });
