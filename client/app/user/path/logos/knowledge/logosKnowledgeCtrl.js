app.controller('logosKnowledgeCtrl', function ($scope, $stateParams, Auth, profileSvc) {


    var currentUser = Auth.getCurrentUser();
    $scope.knowledgeEvaluations = currentUser.pathways[0].stages[1].evaluations;
    var pathwayID = currentUser.pathways[0]._id;
    var stageID = currentUser.pathways[0].stages[1]._id;
    $scope.evaluationsID = currentUser.pathways[0].stages[1].evaluations;
    // $scope.answer = currentUser.pathways[0].stages[1].evaluationsID.content.answer;

    $scope.knowledgeInfo = {
      userID: currentUser._id,
      pathwayID: pathwayID,
      stageID: stageID
    };

    $scope.submitKnowledge = function (obj) {
      $scope.knowledgeInfo.answer = obj.answer;
        $scope.knowledgeInfo.evalID = obj._id;
        console.log($scope.knowledgeInfo);
        profileSvc.updateUserData($scope.knowledgeInfo).then(function (response) {
            Materialize.toast('Updated successfully', 5000);
        }, function (err) {
            Materialize.toast('There was an error', 3000);
        });
    };


    // $scope.user = userObj;
    // $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
    // $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
    // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
});
