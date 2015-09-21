'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('stats', {
      // will want to be /stats/:id when live
      url: '/stats',
      templateUrl: 'app/user/stats/stats.html'
    });
  });
