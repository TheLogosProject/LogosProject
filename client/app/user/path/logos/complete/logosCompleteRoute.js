(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('logosComplete', {
      url: '/path/logos/complete',
      templateUrl: 'app/user/path/logos/complete/logosComplete.html'
    });
  });

}());
