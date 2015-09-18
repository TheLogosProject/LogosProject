app.service('userProfileSvc', function ($http, $q) {

//get user profile information
    this.getUser = function (memberId) {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'http://localhost:8555/api/user-details/' + memberId,
      }).then(function (response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    };

//service for updating user profile
    this.updateUserData = function (userData) {
      var deferred = $q.defer();
      $http({
        method: 'PUT',
        url: 'http://localhost:1337/api/user/' + user._id,
        data: {
          //edit this for the form
          userFirstName: user.firstName
        }
      }).then(function (response) {
        deferred.resolve(response);
      });
      return deferred.promise;
    };


});
