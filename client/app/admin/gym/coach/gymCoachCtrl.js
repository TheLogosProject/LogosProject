app.controller('gymCoachCtrl', function ($scope, Auth, $stateParams, gymCoachService, $location) {

  var gymID = $stateParams.gymID;

  $scope.user = Auth.getCurrentUser();

  var userInfo = {
    userID: $scope.user._id,
    pathwayID: $scope.user.pathways[0]._id,
    stageID: $scope.user.pathways[0].stages[0]._id
  }

  $scope.getEvaluations = function(gymID) {
    gymCoachService.getEval(gymID).then(function(response){
      $scope.evaluations = response;
      console.log($scope.evaluations);
    })
  }

  $scope.getEvaluations(gymID);

  // $scope.submitMovementApproval = function(id) {
  //   userInfo.evalID = id;
  //   logosFundamentalsService.submitEval(userInfo).then(function(response){
  //     document.location.reload(true)
  //   })
  // }

});
