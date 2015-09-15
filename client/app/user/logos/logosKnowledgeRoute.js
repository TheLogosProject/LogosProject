'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosKnowledge', {
      url: '/logosKnowledge',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/logos/logosKnowledge.html'
    });
  });
