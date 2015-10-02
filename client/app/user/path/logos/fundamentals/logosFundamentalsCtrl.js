app.controller('logosFundamentalsCtrl', function ($scope, $stateParams, $sce, Auth, logosFundamentalsService, $location, userObj) {

  $scope.userObject = userObj;
  
  $scope.user = Auth.getCurrentUser();
  $scope.logosPercent = Math.ceil($scope.userObject.pathways[0]["completion"]["amount_completed"]);

//information to ng-repeat the lists//
  $scope.movements = $scope.userObject.pathways[0].stages[0].evaluations;

  var userInfo = {
    userID: $scope.userObject._id,
    pathwayID: $scope.userObject.pathways[0]._id,
    stageID: $scope.userObject.pathways[0].stages[0]._id
  };

//function to update eval status to complete
  $scope.submitMovementApproval = function(id) {
    userInfo.evalID = id;
    logosFundamentalsService.submitEval(userInfo).then(function(response){
      document.location.reload(true)
    });
  };

//unlock appropriate tabs//
  $scope.step1 = $scope.userObject.pathways[0].stages[0].complete;
  $scope.step2 = $scope.userObject.pathways[0].stages[1].complete;

});
