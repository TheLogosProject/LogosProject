'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('membersLanding', {
      // will want to be /userLanding/:id when live
      url: '/membersLanding',
      templateUrl: 'app/admin/members/membersLanding.html'
    });
  });
