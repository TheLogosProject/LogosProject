app.controller('gymCoachCtrl', function ($scope, Auth, $stateParams, gymCoachService, $location) {

  var gymID = $stateParams.gymID;

  // function to get pending evals for members within a gym
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
          if (fundamentalsEval[x].pending === true && fundamentalsEval[x].complete === false) {
            fundamentalsEval[x].firstName = response[i].name.first;
            fundamentalsEval[x].lastName = response[i].name.last;
            fundamentalsEval[x].userID = response[i]._id;
            pendingEval.push(fundamentalsEval[x]);
          }
        }
      }
    })
    $scope.pendingEvaluations = pendingEval;
  };

  $scope.getEvaluations(gymID);


  // function to approve movement
  $scope.user = Auth.getCurrentUser();



  $scope.submitMovementApproval = function(evaluation) {
    var userInfo = {
      userID: evaluation.userID,
      pathwayID: $scope.user.pathways[0]._id,
      stageID: $scope.user.pathways[0].stages[0]._id,
      evalID: evaluation._id
    };
    console.log(userInfo)
    gymCoachService.submitEval(userInfo).then(function(response){
      document.location.reload(true)
    })
  }

});
