(function () {
    'use strict';

    angular.module('app')
        .controller('StatsCtrl', function ($scope, $location, Auth, profileSvc) {
            $scope.menu = [{
                'title': 'Path',
                'link': '/path'
            },

                {
                    'title': 'Stats',
                    'link': '/stats'
                }
            ];

            $scope.isCollapsed = true;
            $scope.isLoggedIn = Auth.isLoggedIn;
            $scope.isAdmin = Auth.isAdmin;
            $scope.getCurrentUser = Auth.getCurrentUser;

            var userObj = Auth.getCurrentUser();
            $scope.goals = userObj.goals;
            var addGoal = function () {
                userObj.goals.push($scope.newGoal);
                profileSvc.updateUserData(userObj);
                $scope.newGoal = "";
            };

            $scope.checkDuplicate = function () {
                var length = $scope.goals.length;
                var i = 0;
                while (i < length) {
                    if ($scope.goals[i] === $scope.newGoal) {
                        $scope.warning = true;
                        $scope.newGoal = "";
                        i = length + 1;
                        return;
                    }
                    i++;
                }
                $scope.warning = false;
                addGoal();
            };


            //to display logos badge
            $scope.fundamentalsBadge = $scope.getCurrentUser().pathways[0].stages[0].complete;
            $scope.knowledgeBadge = $scope.getCurrentUser().pathways[0].stages[1].complete;
            $scope.physicalBadge = $scope.getCurrentUser().pathways[0].stages[2].complete;


            //for pathos badge when ready
            // $scope.pathosBadge = $scope.getCurrentUser().pathways[1].completion.complete;


            //for ethos badge when ready
            // $scope.ethosBadge = $scope.getCurrentUser().pathways[2].completion.complete;

            $scope.deleteGoal = function (goal) {
                var index = $scope.goals.indexOf(goal);
                userObj.goals.splice(index, 1);
                profileSvc.updateUserData(userObj);
            };

            $scope.checkGoals = function () {
                if ($scope.goals.length > 2) {
                    return true;
                } else {
                    return false;
                }
            };

            $scope.logout = function () {
                Auth.logout();
                $location.path('/login');
            };

            $scope.isActive = function (route) {
                return route === $location.path();
            };

        });
} ());
