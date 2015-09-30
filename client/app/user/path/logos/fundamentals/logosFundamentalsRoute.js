'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosFundamentals', {
      url: '/path/logos/fundamentals',
      templateUrl: 'app/user/path/logos/fundamentals/logosFundamentals.html',
      controller: 'logosFundamentalsCtrl',
      resolve: {
        userObj: function(Auth) {
            return Auth.getCurrentUser().$promise;
        }
      }
    });
  });
