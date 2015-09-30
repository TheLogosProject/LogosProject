(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/user/profile/profile.html',
      controller: 'profileCtrl',
      resolve: {
        userObj: function(Auth) {
            return Auth.getCurrentUser().$promise;
        }
      }
    });
  });

}());
