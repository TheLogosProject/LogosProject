(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('stats', {
      url: '/stats',
      templateUrl: 'app/user/stats/stats.html',
      controller: 'StatsCtrl'
    });
  });

}());
