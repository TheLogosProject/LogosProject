'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('gymLanding', {
      url: '/gym',
      templateUrl: 'app/admin/gym/gymLanding.html'
    });
  });
