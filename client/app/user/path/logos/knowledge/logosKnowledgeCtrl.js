app.controller('logosKnowledgeCtrl', function ($scope, $stateParams, Auth, profileSvc) {


    $scope.getCurrentUser = Auth.getCurrentUser;
    console.log($scope.getCurrentUser());
    $scope.knowledgeEvaluations = $scope.getCurrentUser().pathways[0].stages[1].evaluations;


    //
    // $scope.knowledgeInfo = {
    //     _id: userObj._id,
    //     pathways : [
    //       0 : {
    //         stages : [
    //           1 : {
    //             evaluations : [
    //               content : {
    //                 explanation : knowledgeEvaluations.content.explanation
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     ]
    //     // goals: response.user.goals
    // };
    //
    // $scope.submitKnowledge = function (knowledgeInfo) {
    //     console.log(knowledgeInfo);
    //     profileSvc.updateUserData(knowledgeInfo).then(function (response) {
    //         Materialize.toast('Updated successfully', 5000);
    //     }, function (err) {
    //         Materialize.toast('There was an error', 3000);
    //     });
    // };


    // $scope.user = userObj;
    // $scope.logosPercent = Math.ceil($scope.user.pathways.logos.completion.amount_completed);
    // $scope.pathosPercent = Math.ceil($scope.user.pathways.pathos.completion.amount_completed);
    // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
});
