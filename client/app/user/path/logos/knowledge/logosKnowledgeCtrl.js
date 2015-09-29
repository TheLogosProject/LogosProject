app.controller('logosKnowledgeCtrl', function ($scope, $stateParams, $timeout, Auth, logosKnowledgeService) {

    var currentUser = Auth.getCurrentUser();

    // bring logos knowledge questions onto scope
    $scope.knowledgeEvaluations = currentUser.pathways[0].stages[1].evaluations;

    // bring percentageComplete # into scope for circle
    $scope.logosPercent = Math.ceil(currentUser.pathways[0].completion.amount_completed);

    //unlock appropriate tabs
    $scope.step1 = currentUser.pathways[0].stages[0].complete;
    $scope.step2 = currentUser.pathways[0].stages[1].complete;

    // set up variables to route knowledge answer to write endpoint
    var pathwayID = currentUser.pathways[0]._id;
    var stageID = currentUser.pathways[0].stages[1]._id;

    // create knowledgeInfo object to send to endpoint
    $scope.knowledgeInfo = {
        userID: currentUser._id,
        pathwayID: pathwayID,
        stageID: stageID
    };

    $scope.submitKnowledge = function (obj) {
        $scope.knowledgeInfo.answer = obj.content.answer;
        $scope.knowledgeInfo.evalID = obj._id;
        logosKnowledgeService.updateUserData($scope.knowledgeInfo).then(function (response) {
            (function (data) {
                console.log(data);
                logosKnowledgeService.updateEval(data).then(function (response) {
                    Materialize.toast('Updated successfully', 1500);
                }, function (err) {
                    Materialize.toast('There was an error', 3000);
                });
            } ($scope.knowledgeInfo));
        });
    };
});
