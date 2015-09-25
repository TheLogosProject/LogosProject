app.controller('logosPhysicalCtrl', function ($scope, $stateParams, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.physicalEvaluations = $scope.getCurrentUser().pathways[0].stages[2].evaluations;

    // $scope.user = userObj;
    // $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
    // $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
    // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
});
