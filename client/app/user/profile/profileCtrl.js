app.controller('profileCtrl', function ($scope, $stateParams, $location, profileSvc) {

  //Get user profile information
  var memberId = $stateParams.memberId;

  var getProfile = function (memberId) {
    profileSvc.getUser(memberId).then(function (response) {
      console.log(response);
      $scope.gymName = response.gym.name;
      $scope.userInfo = {
        _id: response.user._id,
        name: {
          first: response.user.name.first,
          last: response.user.name.last
        },
        contact_info: {
          phone: response.user.contact_info.phone,
          email: response.user.contact_info.email
        },
        gender: response.user.gender,
        height: {
          feet: response.user.height.feet,
          inches: response.user.height.inches
        },
        weight: response.user.weight
        //needs to be added in on back-end
        //leave out for now
        // goals: response.user.goals
      };
      $scope.updateProfile = function (userInfo) {
        profileSvc.updateUserData(userInfo).then(function (response) {
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
