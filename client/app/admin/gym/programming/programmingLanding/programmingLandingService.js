app.service('programmingLandingService', function ($http) {

  //get user profile information
  this.getGymObj = function (gymId) {
    return $http({
      method: 'GET',
      url: 'http://localhost:8555/api/gym-pathway/' + gymId,
    }).then(function (response) {
      return response.data;
    });
  };

  //service for updating user profile
  // this.updateUserData = function (userData) {
  //   return $http({
  //     method: 'PUT',
  //     url: 'http://localhost:8555/api/user-update',
  //     data: userData
  //   }).then(function (response) {
  //     return response.data;
  //   });
  // };


});
