(function () {
  'use strict';

angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth, profileSvc) {

  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;

  $scope.pathos = $scope.getCurrentUser().pathways[0].stages[1].complete;

  $scope.user = function () {
    $scope.getCurrentUser();
    console.log("lakjsdflkjasdfkjs;kdfj");
    console.log($scope.getCurrentUser());

      $scope.logosPercent = Math.ceil($scope.getCurrentUser().pathways[0].completion.amount_completed);
      // $scope.pathosPercent = Math.ceil($scope.user.pathways[1].completion.amount_completed);
      // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);
    };
    $scope.user();

  ////Modal

  var userObj = Auth.getCurrentUser();
  $scope.userInfo = {
    _id: userObj._id,
    get_to_know: {
      answers: userObj.get_to_know.answers
    }
  };

  $scope.submitModal = function (userInfo) {
    console.log("!!!!!!", userInfo);
    profileSvc.updateUserData(userInfo).then(function (response) {
          Materialize.toast('Answers added successfully', 5000);
      }, function (err) {
        Materialize.toast('There was error.  Please try again.', 3000);
      });
  };

});
}());
