app.controller('logosKnowledgeCtrl', function ($scope, $stateParams, Auth) {
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.knowledgeEvaluations = $scope.getCurrentUser().pathways[0].stages[1].evaluations;

    // $scope.user = userObj;
    // $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
    // $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
    // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
});
