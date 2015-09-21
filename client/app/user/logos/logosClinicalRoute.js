'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logos', {
      url: '/logosClinical',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/logos/logosClinical.html'
    });
  });
