app.controller('logosFundamentalsCtrl', function ($scope, $stateParams, Auth) {

  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.user = $scope.getCurrentUser();
      $scope.logosPercent = Math.ceil($scope.user.pathways[0]["completion"]["amount_completed"]);
});
