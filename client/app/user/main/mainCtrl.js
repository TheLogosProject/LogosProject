(function () {
  'use strict';


angular.module('app')
.controller('mainCtrl', function ($scope, $location, Auth) {

  var that = this;
  that.isAdmin = Auth.isAdmin;

  $scope.getCurrentUser = Auth.getCurrentUser;

});
}());
