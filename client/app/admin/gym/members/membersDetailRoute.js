'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('membersDetail', {
                // will be :gymId and :memberId when live
                url: '/gym/members/gymId/memberId',
                templateUrl: 'app/admin/gym/members/membersDetail.html'
            });
    });
