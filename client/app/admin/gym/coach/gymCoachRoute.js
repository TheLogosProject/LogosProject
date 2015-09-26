(function () {
  'use strict';


angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymCoach', {
				// will be :gymId when live
                url: '/gym/coach/:gymID',
                templateUrl: 'app/admin/gym/coach/gymCoach.html',
                controller: 'gymCoachCtrl'
            });
    });
}());
