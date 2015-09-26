app.controller('logosPhysicalCtrl', function ($scope, $stateParams, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.user = $scope.getCurrentUser();

    $scope.movements = $scope.user.pathways[0].stages[2].evaluations;

    console.log($scope.user.pathways[0].stages[2].evaluations[0].content.explanation);
    // $scope.user = userObj;
    // $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
    // $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
    // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
});
