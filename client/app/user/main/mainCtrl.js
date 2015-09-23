(function () {
  'use strict';


angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth) {

  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;
  console.log($scope.getCurrentUser());

  $scope.user = userObj;
      $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
      $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
      $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
  stateParams, userObj

});
}());
