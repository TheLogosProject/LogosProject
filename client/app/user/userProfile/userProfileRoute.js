'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('userProfile', {
      url: '/userProfile/:memberId',
      // will want to be /userProfile/:id when live
      templateUrl: 'app/user/userProfile/userProfile.html',
      controller: 'userProfileCtrl'
    });
  });
