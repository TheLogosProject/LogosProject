(function () {
  'use strict';

angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
    .state('ethos', {
      url: '/ethos',
      templateUrl: 'app/user/ethos/ethos.html'
    });
  });


}());
