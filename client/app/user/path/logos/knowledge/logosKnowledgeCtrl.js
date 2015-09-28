app.controller('logosKnowledgeCtrl', function ($scope, $stateParams, $timeout, Auth, logosKnowledgeService) {

    var currentUser = Auth.getCurrentUser();
    $scope.knowledgeEvaluations = currentUser.pathways[0].stages[1].evaluations;
    var pathwayID = currentUser.pathways[0]._id;
    var stageID = currentUser.pathways[0].stages[1]._id;
    $scope.evaluationsID = currentUser.pathways[0].stages[1].evaluations;
    $scope.logosPercent = Math.ceil(currentUser.pathways[0].completion.amount_completed);

    $scope.knowledgeInfo = {
        userID: currentUser._id,
        pathwayID: pathwayID,
        stageID: stageID
    };

    $scope.submitKnowledge = function (obj) {
        $scope.knowledgeInfo.answer = obj.content.answer;
        $scope.knowledgeInfo.evalID = obj._id;
        logosKnowledgeService.updateUserData($scope.knowledgeInfo).then(function (response) {
            Materialize.toast('Updated successfully', 1500);
            $timeout(function () { document.location.reload(true); }, 1500);
        }, function (err) {
            Materialize.toast('There was an error', 3000);
        });
    };
});
