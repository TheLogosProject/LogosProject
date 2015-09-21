'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('learnMore', {
      url: '/learn-more',
      templateUrl: 'app/public/learnMore/learnMore.html'
    });
  });
