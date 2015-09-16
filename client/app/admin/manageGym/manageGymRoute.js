'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('manageGym', {
      // will want to be /userLanding/:id when live
      url: '/manageGym',
      templateUrl: 'app/admin/manageGym/manageGym.html'
    });
  });
