'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'app/public/register/register.html',
      controller: 'registerCtrl',
      resolve: {
        gyms: function(gymLandingService) {
           return gymLandingService.getGym().then(function (response) {
                return response;
          });
        }
      }
    });
  });
