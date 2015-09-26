(function () {
    'use strict';


    angular.module('app')
        .controller('membersLandingCtrl', function ($scope, $location, membersLandingService, $http, Auth, User) {

            var userObj = Auth.getCurrentUser();
            var gymID = userObj.gym;
            // Use the User $resource to fetch all users
            (function (id) {
                membersLandingService.getUsers(id).then(function (response) {
                    console.log(response);
                    $scope.users = response;
                });
            }(gymID));

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
