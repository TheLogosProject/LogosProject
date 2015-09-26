(function () {
  'use strict';

  angular.module('app')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
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

      console.log($scope.getCurrentUser().gym);

      $scope.logout = function () {
        Auth.logout();
        $location.path('/login');
      };

      $scope.isActive = function (route) {
        return route === $location.path();
      };

    });
}());
