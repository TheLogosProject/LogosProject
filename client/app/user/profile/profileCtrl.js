(function () {
    'use strict';



    app.controller('profileCtrl', function ($scope, $stateParams, $location, profileSvc, Auth) {

        //Get user profile information

        var userObj = Auth.getCurrentUser();
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
            console.log(userInfo);
            profileSvc.updateUserData(userInfo).then(function (response) {
                Materialize.toast('Updated successfully', 5000);
            }, function (err) {
                Materialize.toast('There was an error', 3000);
            });
        };

        $scope.addGoal=function(){
            userObj.goals.push($scope.newGoal);
            profileSvc.updateUserData(userObj);

        };

        $scope.deleteGoal = function(goal) {
          var index = $scope.goals.indexOf(goal);
          userObj.goals.splice(index, 1);
          profileSvc.updateUserData(userObj);
        };

    });

} ());
