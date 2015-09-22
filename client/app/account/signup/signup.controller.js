(function () {
  'use strict';

angular.module('app')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.createUser({
          name: {
            first: $scope.user.name.first,
            last: $scope.user.name.last
          },
          email: $scope.user.email,
          password: $scope.user.password

          // team: $scope.user.team
        })
        .then( function() {
          $location.path('/main');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };



    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

}());
