(function () {
  'use strict';

angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth, profileSvc, userObj) {

  // function to return user
  $scope.getCurrentUser = Auth.getCurrentUser;

  // userObj for modal and main page
  $scope.userObject = userObj;

  // get percentage data for stage circles
  $scope.logosPercent = Math.ceil($scope.getCurrentUser().pathways[0].completion.amount_completed);

  // below percentages are commented out until programs are activated
  // $scope.pathosPercent = Math.ceil($scope.user.pathways[1].completion.amount_completed);
  // $scope.ethosPercent = Math.ceil($scope.user.pathways.ethos.completion.amount_completed);

  //disable button unless Logos is completed
  $scope.pathos = $scope.getCurrentUser().pathways[0].stages[1].complete;

  // create new userObj to send thru submitModal function 
  var userObj = Auth.getCurrentUser();
  $scope.userInfo = {
    _id: userObj._id,
    get_to_know: {
      answers: userObj.get_to_know.answers
    }
  };

  // create submit function to save answer on userObj
  $scope.submitModal = function (userInfo) {
    profileSvc.updateUserData(userInfo).then(function (response) {
          Materialize.toast('Answers added successfully', 5000);
      }, function (err) {
        Materialize.toast('There was error.  Please try again.', 3000);
      });
  };

});
}());
