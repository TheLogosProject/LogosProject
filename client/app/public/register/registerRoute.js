'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'app/public/register/register.html'
    });
  });
