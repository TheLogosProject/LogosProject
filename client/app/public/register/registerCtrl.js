(function () {
  'use strict';

// ******* Note for Mike - insert Auth dependency again

angular.module('app')
  .controller('registerCtrl', function ($scope, $location, $window, gyms) {
    // bring in gym array for gym dropdown
    $scope.gymList = gyms;
    $scope.gymOptions = $scope.gymList;
    $scope.changeGym = function() {
      $scope.gymId =
    }
    console.log($scope.gymOptions);

    // authentication form brian d
    $scope.user = {};
    $scope.errors = {};

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/userLanding');
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
