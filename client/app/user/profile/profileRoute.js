'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('profile', {
      url: '/profile/:memberId',
      // will want to be /userProfile/:id when live
      templateUrl: 'app/user/profile/profile.html',
      controller: 'profileCtrl'
    });
  });
