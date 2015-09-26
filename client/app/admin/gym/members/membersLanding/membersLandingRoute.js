(function () {
  'use strict';

angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('membersLanding', {
                url: '/gym/members',
                templateUrl: 'app/admin/gym/members/membersLanding/membersLanding.html',
                controller: 'membersLandingCtrl'
            });
    });
}());
