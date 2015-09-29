(function () {
  'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('logosLanding', {
        url: '/path/logos',
        template: '<ui-view></ui-view>',
        controller: 'logosLandingCtrl'
      });
  });
}());
