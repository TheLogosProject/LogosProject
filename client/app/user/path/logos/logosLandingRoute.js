(function () {
  'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('logos', {
        // when live /path/logos/:memberId
        url: '/path/logos',
        template: '<ui-view></ui-view>',
        controller: function(onPageLoad, $location) {
          $location.path(onPageLoad);
        },
        resolve: {
            onPageLoad: function() {
              return '/path/logos/fundamentals';
          }
        }
      });

  });

}());
