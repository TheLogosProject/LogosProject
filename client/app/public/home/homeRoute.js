'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/public/home/home.html'
    });
  });
