app.controller('logosFundamentalsCtrl', function ($scope, $stateParams, $sce, Auth) {

//auth information
  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.user = $scope.getCurrentUser();
  $scope.logosPercent = Math.ceil($scope.user.pathways[0]["completion"]["amount_completed"]);

//information to ng-repeat the lists//
  $scope.movements = $scope.user.pathways[0].stages[0].evaluations;

//unlock appropriate tabs//
  $scope.step1 = $scope.user.pathways[0].stages[0].complete;
  $scope.step2 = $scope.user.pathways[0].stages[1].complete;

});
