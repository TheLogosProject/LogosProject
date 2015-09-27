app.controller('gymCoachCtrl', function ($scope, Auth, $stateParams, gymCoachService, $location) {

  var gymID = $stateParams.gymID;

  $scope.user = Auth.getCurrentUser();

  var userInfo = {
    userID: $scope.user._id,
    pathwayID: $scope.user.pathways[0]._id,
    stageID: $scope.user.pathways[0].stages[0]._id
  };

  $scope.getEvaluations = function(gymID) {
    var pendingEval = [];
    gymCoachService.getUserObj(gymID).then(function(response){
      console.log(response);
      // loops through userObj
      for(var i=0; i<response.length; i++) {
        // debugger;
        var fundamentalsEval = response[i].pathways[0].stages[0].evaluations;
      // loops through userObj fundamentals evaluations to check if any are pending, if so push to pendingEval array
        for (var x = 0; x < fundamentalsEval.length; x++) {
          if (fundamentalsEval[x].pending === true ) {
            fundamentalsEval[x].firstName = response[i].name.first;
            fundamentalsEval[x].lastName = response[i].name.last;
            pendingEval.push(fundamentalsEval[x]);
          }
        }
      }
    })
    $scope.pendingEvaluations = pendingEval;
  };

  $scope.getEvaluations(gymID);
  //
  // for loop through each user object
  // check each evaluation within the fundamentals stage and push those with pending true into a new array
  // return that new array to ng-repeat

  // $scope.submitMovementApproval = function(id) {
  //   userInfo.evalID = id;
  //   logosFundamentalsService.submitEval(userInfo).then(function(response){
  //     document.location.reload(true)
  //   })
  // }

});
