(function () {
  'use strict';

app.service('membersDetailService', function ($http, $stateParams) {

  //service for updating user profile
  this.toggleAdmin = function (data) {
    return $http({
      method: 'PUT',
      url: '/api/users/update/isadmin',
      data: data
    }).then(function (response) {
      return response;
    });
  };

  //service for updating user profile
  this.toggleAccount = function (data) {
    return $http({
      method: 'PUT',
      url: '/api/users/update/isactive',
      data: data
    }).then(function (response) {
      return response;
    });
  };

  //get user
  this.getUser = function (id) {
      return $http({
          method: 'GET',
          url: '/api/users/userInfo/' + id
      })
          .then(function (response) {
              return response.data;
          });
  };

});

}());
