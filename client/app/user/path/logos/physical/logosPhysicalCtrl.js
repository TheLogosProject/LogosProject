app.controller('logosPhysicalCtrl', function ($scope, $stateParams, logosPhysicalService, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.user = $scope.getCurrentUser();

    $scope.movements = $scope.user.pathways[0].stages[2].evaluations;

    //unlock appropriate tabs//
      $scope.step1 = $scope.user.pathways[0].stages[0].complete;
      $scope.step2 = $scope.user.pathways[0].stages[1].complete;

      $scope.logosPercent = Math.ceil($scope.user.pathways[0]["completion"]["amount_completed"]);

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
});
