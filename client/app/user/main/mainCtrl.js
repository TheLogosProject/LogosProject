(function () {
  'use strict';


angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth) {

  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;
  console.log($scope.getCurrentUser());

  $scope.user = $scope.getCurrentUser();
      $scope.logosPercent = Math.ceil($scope.user.pathways[0].completion.amount_completed);
      // $scope.pathosPercent = Math.ceil($scope.user.pathways[1]["completion"]["amount_completed"]);
      // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);

});
}());
