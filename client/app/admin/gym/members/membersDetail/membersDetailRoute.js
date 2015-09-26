(function () {
  'use strict';


angular.module('app')
    .config(function($stateProvider) {
        $stateProvider
            .state('membersDetail', {
                url: '/gym/members/:memberID',
                templateUrl: 'app/admin/gym/members/membersDetail/membersDetail.html',
                controller: 'membersDetailCtrl'
            });
    });

}());
