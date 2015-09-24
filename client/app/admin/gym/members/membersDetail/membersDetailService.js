(function () {
  'use strict';

app.service('membersDetailService', function ($http, $stateParams) {

  //get user profile information
  this.toggleAdmin = function () {
    return $http({
      method: 'PUT',
      url: '/api/users-update-isadmin',
      data: userObj
    }).then(function (response) {
      return response.data;
    });
  };

  //service for updating user profile
  this.toggleAccount = function () {
    return $http({
      method: 'PUT',
      url: '/api/users-update-isactive',
      data: userObj
    }).then(function (response) {
      return response.data;
    });
  };

});

}());
