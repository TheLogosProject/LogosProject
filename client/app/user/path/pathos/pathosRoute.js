'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('pathos', {
      url: '/pathos',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/pathos/pathos.html'
    });
  });
