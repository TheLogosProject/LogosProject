(function () {
  'use strict';

angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth, profileSvc, userObj) {

  // function to return user
  $scope.getCurrentUser = Auth.getCurrentUser;

  // userObj for modal and main page
  $scope.userObject = userObj;

  // checks to see if an answer exists to initial modal question and will show/hide accordingly
  $(document).ready(function() {
    if ($scope.userObject.get_to_know.answers.length === 0) {
      $('#modal1').openModal();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        complete: function() {} // Callback for Modal close
      });
    }
  });

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
