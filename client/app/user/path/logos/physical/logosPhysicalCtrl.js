app.controller('logosPhysicalCtrl', function ($scope, $stateParams, logosPhysicalService, Auth, userObj) {

    $scope.user = Auth.getCurrentUser();
    // $scope.user = $scope.getCurrentUser();
    $scope.userObject = userObj;

    $scope.movements = $scope.userObject.pathways[0].stages[2].evaluations;

    //unlock appropriate tabs//
      $scope.step1 = $scope.userObject.pathways[0].stages[0].complete;
      $scope.step2 = $scope.userObject.pathways[0].stages[1].complete;

      $scope.logosPercent = Math.ceil($scope.userObject.pathways[0]["completion"]["amount_completed"]);

      // function to update progression status to complete
      $scope.changeStatus = function (progression, movement) {
          var userObjForProg = {
              userID: $scope.userObject._id,
              pathwayID: $scope.userObject.pathways[0]._id,
              stageID: $scope.userObject.pathways[0].stages[2]._id,
              evalID: movement._id,
              progID: progression._id
          };
          logosPhysicalService.updateStatus(userObjForProg).then(function (response) {
              return response;
          });
      };

      // function to update eval status to complete
      var userInfoForEval = {
        userID: $scope.userObject._id,
        pathwayID: $scope.userObject.pathways[0]._id,
        stageID: $scope.userObject.pathways[0].stages[2]._id
      };

      $scope.submitMovementApproval = function(id) {
        userInfoForEval.evalID = id;
        logosPhysicalService.submitEval(userInfoForEval).then(function(response){
          document.location.reload(true)
        });
      };

});
