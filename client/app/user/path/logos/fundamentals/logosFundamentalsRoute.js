'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosFundamentals', {
      url: '/path/logos/fundamentals',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/path/logos/fundamentals/logosFundamentals.html'
    });
  });
