'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('addEditMove', {
      // will want to be /userLanding/:id when live
      url: '/addEditMove',
      templateUrl: 'app/admin/addEditMove/addEditMove.html'
    });
  });
