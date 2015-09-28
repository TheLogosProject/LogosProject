app.controller('logosFundamentalsCtrl', function ($scope, $stateParams, $sce, Auth, logosFundamentalsService, $location) {

//auth information
  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.user = Auth.getCurrentUser();
  $scope.logosPercent = Math.ceil($scope.user.pathways[0]["completion"]["amount_completed"]);

//information to ng-repeat the lists//
  $scope.movements = $scope.user.pathways[0].stages[0].evaluations;

  var userInfo = {
    userID: $scope.user._id,
    pathwayID: $scope.user.pathways[0]._id,
    stageID: $scope.user.pathways[0].stages[0]._id
  };

//function to update eval status to complete
  $scope.submitMovementApproval = function(id) {
    userInfo.evalID = id;
    logosFundamentalsService.submitEval(userInfo).then(function(response){
      document.location.reload(true)
    });
  };

//unlock appropriate tabs//
  $scope.step1 = $scope.user.pathways[0].stages[0].complete;
  $scope.step2 = $scope.user.pathways[0].stages[1].complete;

});
