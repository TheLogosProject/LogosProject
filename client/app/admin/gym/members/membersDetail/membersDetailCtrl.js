(function () {
  'use strict';

  app.controller('membersDetailCtrl', function ($scope, membersDetailService, Auth) {
      
      $scope.userObj = Auth.getCurrentUser();

    // var userObj = {
    //   userID: $scope.UPDATETHIS
    // }
    $scope.toggleAdminState = function() {
      membersDetailService.toggleAdmin();
    };

    $scope.toggleAccountState = function() {
      membersDetailService.toggleAdmin();
    };

  });

}());
