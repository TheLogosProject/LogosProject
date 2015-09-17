'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('gymCoach', {
				// will be :gymId when live
                url: '/gym/coach/gymId',
                templateUrl: 'app/admin/gym/coach/gymCoach.html'
            });
    });
