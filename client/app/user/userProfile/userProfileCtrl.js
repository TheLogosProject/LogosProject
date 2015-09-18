app.controller('userProfileCtrl', function ($scope, $stateParams, userProfileSvc) {

  //Get user profile information
  var memberId = $stateParams.memberId;

  var getProfile = function (memberId) {
    userProfileSvc.getUser(memberId).then(function (response) {
      console.log(response);
      $scope.userInfo = {
        _id: response._id,
        firstName: response.user.name.first,
        lastName: response.user.name.last,
        email: response.user.contact_info.email,
        phone: response.user.contact_info.phone,
        gender: response.user.gender,
        heightFeet: response.user.height.feet,
        heightInches: response.user.height.inches,
        weight: response.user.weight,
        goals: response.user.goals,
        gym: response.gym.name
      };
      $scope.updateProfile = function(userInfo){
        userProfileSvc.updateUserData(userInfo).then(function (response) {
          getProfile();
          $location.path('/userLanding');
          Materialize.toast('Updated successfully', 5000);
        }, function (err) {
          Materialize.toast('There was an error', 3000);
        });
        console.log(userInfo);
      };
    });
  };
  getProfile(memberId);




  
});
