'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('programming', {
                // will be :gymId when live
                url: '/gym/programming/:gymId',
                templateUrl: 'app/admin/gym/programming/programmingLanding/programmingLanding.html',
                controller: 'programmingLandingCtrl',
                resolve: {
                  pathways: function(programmingLandingService, $stateParams) {
                    var gymId = $stateParams.gymId;
                     return programmingLandingService.getGymPathway(gymId).then(function(response) {
                          return response;
                    });
                  }
                }
            })

            .state('programming.logosFundamentals', {
              url: '/fundamentals',
              templateUrl: 'app/admin/gym/programming/logos/fundamentals/logosFundamentals.html'
            })

            .state('programming.logosKnowledge', {
              url: '/knowledge',
              templateUrl: 'app/admin/gym/programming/logos/knowledge/logosKnowledge.html'
            })

            .state('programming.logosPhysical', {
              url: '/physical',
              templateUrl: 'app/admin/gym/programming/logos/physical/logosPhysical.html'
            });
    });
