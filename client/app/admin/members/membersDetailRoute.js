'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('membersDetail', {
      // will want to be /userLanding/:id when live
      url: '/members/id',
      templateUrl: 'app/admin/members/membersDetail.html'
    });
  });
