'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('logos', {
        // when live /path/logos/:memberId
        url: '/path/logos/:memberId',
        template: '<ui-view></ui-view>',
        controller: function(onPageLoad, $location) {
          $location.path(onPageLoad)
        },
        resolve: {
          onPageLoad: function(logosLandingService, $location, $stateParams) {
            var memberId = $stateParams.memberId;
            return logosLandingService.getUser(memberId).then(function(response) {
              console.log(response);
              if (response.stages[0].complete === false) {
                return '/path/logos/fundamentals/' + memberId
              }
              else if (response.stages[0].complete && response.stages[1].complete && response.stages[2].complete === true) {
                return '/path/logos/complete/' + memberId
              }
              else if (response.stages[0].complete && response.stages[1].complete === true) {
                return '/path/logos/physical/' + memberId
              }
              else {
                return '/path/logos/knowledge/' + memberId
              }
            })
          }
        }

      })

  });

  //
  // resolve: {
  //   onPageLoad: function(logosLandingService, $location, $stateParams) {
  //     var memberId = $stateParams.memberId;
  //     return logosLandingService.getUser(memberId).then(function(response) {
  //       console.log(response);
  //       if (response.stages[0].complete === false) {
  //         return $location.path('/path/logos/fundamentals')
  //       }
  //       else if (response.stages[0].complete && response.stages[1].complete && response.stages[2].complete === true) {
  //         return $location.path('/path/logos/complete')
  //       }
  //       else if (response.stages[0].complete && response.stages[1].complete === true) {
  //         return $location.path('/path/logos/physical')
  //       }
  //       else {
  //         return $location.path('/path/logos/knowledge')
  //       }
  //     })
  //   }
  // }
