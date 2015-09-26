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
