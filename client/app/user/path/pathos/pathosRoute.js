(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('pathos', {
      url: '/pathos',
      templateUrl: 'app/user/pathos/pathos.html'
    });
  });

}());
