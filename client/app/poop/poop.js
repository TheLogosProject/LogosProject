(function () {
  'use strict';


angular.module('app')
  .config(function ($stateProvider) {
    $stateProvider
      .state('poop', {
        url: '/poop',
        templateUrl: 'app/poop/poop.html',
        controller: 'poopCtrl'
      });
  });

}());
