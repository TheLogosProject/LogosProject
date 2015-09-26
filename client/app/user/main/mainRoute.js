(function () {
  'use strict';

angular.module('app')
    .config(function ($stateProvider) {
      $stateProvider
          .state('main', {
              url: '/main',
              templateUrl: 'app/user/main/main.html',
              controller: 'mainCtrl'
          });
  });

}());
