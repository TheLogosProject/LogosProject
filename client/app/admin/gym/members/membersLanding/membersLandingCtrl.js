(function () {
    'use strict';


    angular.module('app')
        .controller('membersLandingCtrl', function ($scope, $location, membersLandingService, $http, Auth, User) {

            var userObj = Auth.getCurrentUser();
            if (userObj.is_master) {
                membersLandingService.getAllUsers().then(function (response) {
                  for (var i = 0; i < response.length; i++) {
                    if (response[i]["currently_active"] === true) {
                      response[i]["currently_active"] = "Yes";
                    } else {
                      response[i]["currently_active"] = "No";
                    }
                  }
                  $scope.users = response;
                  console.log($scope.users);
                });
            } else {
                var gymID = userObj.gym;
                (function (id) {
                    membersLandingService.getUsers(id).then(function (response) {
                        $scope.users = response;
                    });
                } (gymID));
            }

            $scope.selectedID = function (memberID) {
                $location.path('/gym/members/' + memberID);
            };

            // $scope.delete = function (user) {
            //     User.remove({ id: user._id });
            //     angular.forEach($scope.users, function (u, i) {
            //         if (u === user) {
            //             $scope.users.splice(i, 1);
            //         }
            //     });
            // };
        });

} ());
