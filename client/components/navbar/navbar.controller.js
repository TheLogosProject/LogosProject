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

      console.log($scope.getCurrentUser());

      $scope.logout = function () {
        Auth.logout();
        Materialize.toast('Logged out successfully!', 2000);
        $location.path('/login');
      };

      $scope.isActive = function (route) {
        return route === $location.path();
      };

    });
}());
