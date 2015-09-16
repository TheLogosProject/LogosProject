'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('membersLanding', {
      url: '/members',
      templateUrl: 'app/admin/members/membersLanding.html'
    });
  });
