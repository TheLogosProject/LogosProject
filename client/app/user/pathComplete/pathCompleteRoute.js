'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('pathComplete', {
      url: '/pathComplete',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/pathComplete/pathComplete.html'
    });
  });
