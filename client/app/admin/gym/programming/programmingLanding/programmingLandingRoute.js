(function () {
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
    });
}());
