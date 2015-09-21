'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('programming', {
                url: '/gym/programming/:gymId',
                templateUrl: 'app/admin/gym/programming/programmingLanding/programmingLanding.html',
                controller: 'programmingLandingCtrl',
                resolve: {
                    gymObj: function (programmingLandingService, $stateParams) {
                        var gymId = $stateParams.gymId;
                        return programmingLandingService.getGymObj(gymId).then(function (response) {
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
