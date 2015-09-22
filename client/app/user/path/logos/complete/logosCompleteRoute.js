'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosComplete', {
      url: '/path/logos/complete/:memberId',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/path/logos/complete/logosComplete.html'
    });
  });
