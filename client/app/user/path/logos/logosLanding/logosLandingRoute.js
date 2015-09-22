'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('logos', {
        // when live /path/logos/:memberId
        url: '/path/logos',
        template: '<ui-view></ui-view>',
        resolve: {
          onPageLoad: function(logosLandingService, $location) {
            logosLandingService.getUser().then(function(response) {
              if (response.stages[0].complete === false) {
                return $location.path('/path/logos/fundamentals')
              }
              else if (response.stages[0].complete && response.stages[1].complete && response.stages[2].complete === true) {
                return $location.path('/path/logos/complete')
              }
              else if (response.stages[0].complete && response.stages[1].complete === true) {
                return $location.path('/path/logos/physical')
              }
              else {
                return $location.path('/path/logos/knowledge')
              }
            })
          }
        }

      })

  });

// above logis is correct,
