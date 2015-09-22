app.service('logosLandingService', function ($http, $stateParams) {

  //get user profile information
  this.getUser = function () {
    return $http({
      method: 'GET',
      url: 'http://localhost:8555/api/user-logos/560086ff00b7d81f04f874a0',
    }).then(function (response) {
      return response.data;
    });
  };

});
