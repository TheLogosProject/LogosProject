app.controller('userProfileCtrl', function ($scope, $stateParams, userProfileSvc) {

  //Get user profile information
  var memberId = $stateParams.memberId;

  var getProfile = function (memberId) {
    userProfileSvc.getUser(memberId).then(function (response) {
      console.log(response);
      $scope.userInfo = response;
    });
  };
  getProfile(memberId);

  //Update user profile information
  $scope.updateProfile = function (userData) {
    userProfileSvc.updateUserData(user).then(function (response) {
      getProfile();
      $location.path('/userLanding');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };


});
