(function () {
    'use strict';



    app.controller('profileCtrl', function ($scope, $stateParams, $location, profileSvc, Auth) {

        //Get user profile information

        var userObj = Auth.getCurrentUser();
        $scope.gymName = userObj.gym.name;
        $scope.getCurrentUser = Auth.getCurrentUser;

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
            weight: userObj.weight
            //needs to be added in on back-end
            //leave out for now
            // goals: response.user.goals
        };

        $scope.updateProfile = function (userInfo) {
            console.log(userInfo);
            profileSvc.updateUserData(userInfo).then(function (response) {
                Materialize.toast('Updated successfully', 5000);
            }, function (err) {
                Materialize.toast('There was an error', 3000);
            });
        };



    });

} ());
