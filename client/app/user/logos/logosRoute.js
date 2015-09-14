'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logos', {
      url: '/logos',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/logos/logos.html'
    });
  });
