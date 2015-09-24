app.service('logosLandingService', function ($http) {

  //get user profile information
  this.getUser = function (memberId) {
    return $http({
      method: 'GET',
      url: '/api/users-logos/' + memberId
    }).then(function (response) {
      return response.data;
    });
  };

});


// http://localhost:9000/api/users-logos/560086ff00b7d81f04f874a0
// we need to re write the logic to use the memberId to traverse the userObj, find the pathways array and then run the if else comparison
