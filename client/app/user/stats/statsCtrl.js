(function () {
  'use strict';

  angular.module('app')
    .controller('StatsCtrl', function ($scope, $location, Auth) {
      $scope.menu = [{
          'title': 'Path',
          'link': '/path'
        },

        {
          'title': 'Stats',
          'link': '/stats'
        }
      ];

      $scope.isCollapsed = true;
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.getCurrentUser = Auth.getCurrentUser;


//to display logos badge
      $scope.fundamentalsBadge = $scope.getCurrentUser().pathways[0].stages[0].complete;
      $scope.knowledgeBadge = $scope.getCurrentUser().pathways[0].stages[1].complete;
      $scope.physicalBadge = $scope.getCurrentUser().pathways[0].stages[2].complete;


//for pathos badge when ready
      // $scope.pathosBadge = $scope.getCurrentUser().pathways[1].completion.complete;


//for ethos badge when ready
      // $scope.ethosBadge = $scope.getCurrentUser().pathways[2].completion.complete;

      console.log($scope.getCurrentUser());

      $scope.logout = function () {
        Auth.logout();
        $location.path('/login');
      };

      $scope.isActive = function (route) {
        return route === $location.path();
      };

    });
}());
