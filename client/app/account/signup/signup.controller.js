(function () {
  'use strict';

  angular.module('app')
    .controller('SignupCtrl', function ($scope, Auth, $location, $window, $http, gyms) {

      //
      $scope.user = {};
      $scope.errors = {};

      $scope.getUser = function () {
        Auth.getCurrentUser();
        console.log('test')
      };

      //Drop Down
      var gymsArr = [];
      for (var i = 0; i < gyms.length; i++) {
        var gymInfo = {
          label: gyms[i]["name"],
          value: gyms[i]["_id"]
        };
        gymsArr.push(gymInfo);
      }
      $scope.gymOptions = gymsArr;


      //Auth + User
      $scope.register = function (form) {
        $scope.submitted = true;
        if (form.$valid) {
          Auth.createUser({
              name: {
                first: $scope.user.name.first,
                last: $scope.user.name.last
              },
              email: $scope.user.email,
              password: $scope.user.password,
              gym: $scope.user.gym

            })
            .then(function () {
              $location.path('/main');
            })
            .catch(function (err) {
              err = err.data;
              $scope.errors = {};

              // Update validity of form fields that match the mongoose errors
              angular.forEach(err.errors, function (error, field) {
                form[field].$setValidity('mongoose', false);
                $scope.errors[field] = error.message;
              });
            });
        }
      };

      $scope.loginOauth = function (provider) {
        $window.location.href = '/auth/' + provider;
      };
    });

}());

// bring in gym array for gym dropdown
// var gymsArr = [];
// for (var i = 0; i < gyms.length; i++) {
//     var gymInfo = {
//         label: gyms[i]["name"],
//         value: gyms[i]["_id"]
//     };
//     gymsArr.push(gymInfo);
// }
// $scope.gymOptions = gymsArr;
