'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('congrats', {
      url: '/congrats',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/congrats/congrats.html'
    });
  });
