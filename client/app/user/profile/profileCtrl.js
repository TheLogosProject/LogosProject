(function () {
    'use strict';

    app.controller('profileCtrl', function ($scope, $stateParams, $location, profileSvc, Auth, userObj) {

        $scope.gymName = userObj.gym.name;
        $scope.getCurrentUser = Auth.getCurrentUser;
        $scope.goals = userObj.goals;

        $scope.userInfo = {
            _id: userObj._id,
            name: {
                first: userObj.name.first,
                last: userObj.name.last
            },
            contact_info: {
                phone: userObj.contact_info.phone,
                email: userObj.email
            },
            gender: userObj.gender,
            height: {
                feet: userObj.height.feet,
                inches: userObj.height.inches
            },
            weight: userObj.weight,
        };

        $scope.goalInfo = {
            _id: userObj._id,
            goals: userObj._id
        };

        $scope.updateProfile = function (userInfo) {
            profileSvc.updateUserData(userInfo).then(function (response) {
                Materialize.toast('Updated successfully', 5000);
            }, function (err) {
                Materialize.toast('There was an error', 3000);
            });
        };

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

    });

} ());
