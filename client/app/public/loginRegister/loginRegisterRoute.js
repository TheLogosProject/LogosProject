'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/public/loginRegister/loginRegister.html'
    });
  });
