'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('ethos', {
      url: '/ethos',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/ethos/ethos.html'
    });
  });
