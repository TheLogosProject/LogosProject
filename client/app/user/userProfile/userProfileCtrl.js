app.controller('userProfileCtrl', function ($scope, $stateParams, userObj) {

//Get user profile information
  var getProfile = function () {
    userData.getUser().then(function (response) {
      console.log(response);
      $scope.userInfo = response;
    });
  };
  getProfile();

//Update user profile information
  $scope.updateProfile = function (userData) {
    userData.updateUserData(user).then(function (response) {
      getProfile();
      $location.path('/userLanding');
      Materialize.toast('Updated successfully', 1000);
    }, function (err) {
      Materialize.toast('There was an error', 1000);
    });
  };


});
