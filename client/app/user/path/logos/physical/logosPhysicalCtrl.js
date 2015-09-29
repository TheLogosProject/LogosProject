app.controller('logosPhysicalCtrl', function ($scope, $stateParams, logosPhysicalService, Auth) {

    $scope.user = Auth.getCurrentUser();
    // $scope.user = $scope.getCurrentUser();

    $scope.movements = $scope.user.pathways[0].stages[2].evaluations;

    //unlock appropriate tabs//
      $scope.step1 = $scope.user.pathways[0].stages[0].complete;
      $scope.step2 = $scope.user.pathways[0].stages[1].complete;

      $scope.logosPercent = Math.ceil($scope.user.pathways[0]["completion"]["amount_completed"]);

      // function to update progression status to complete
      $scope.changeStatus = function (progression, movement) {
          var userObj = {
              userID: $scope.user._id,
              pathwayID: $scope.user.pathways[0]._id,
              stageID: $scope.user.pathways[0].stages[2]._id,
              evalID: movement._id,
              progID: progression._id
          };
          logosPhysicalService.updateStatus(userObj).then(function (response) {
              return response;
          });
      };

      // function to update eval status to complete
      var userInfo = {
        userID: $scope.user._id,
        pathwayID: $scope.user.pathways[0]._id,
        stageID: $scope.user.pathways[0].stages[2]._id
      };

      $scope.submitMovementApproval = function(id) {
        userInfo.evalID = id;
        console.log(userInfo)
        logosPhysicalService.submitEval(userInfo).then(function(response){
          document.location.reload(true)
        });
      };

});
