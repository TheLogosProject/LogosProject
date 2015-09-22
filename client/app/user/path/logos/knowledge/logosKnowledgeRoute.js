'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('knowledge', {
      url: '/path/logos/knowledge/:memberId',
      // will need to tie this to username for unique view for each member
      templateUrl: 'app/user/path/logos/knowledge/logosKnowledge.html'
    });
  });
