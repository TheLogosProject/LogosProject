    app.controller('membersDetailCtrl', function ($scope, $stateParams, membersDetailService, Auth) {
        $scope.id = $stateParams.memberID;

        var loggedUser = Auth.getCurrentUser();

        $scope.userInfo = loggedUser;

        $scope.loggedInID = loggedUser._id;

        $scope.memberID = {
            userID: $scope.id
        };

        (function (id) {
            membersDetailService.getUser(id).then(function (response) {
                $scope.userObj = response;

                $scope.getToKnow = $scope.userObj.get_to_know
                $scope.knowledgeEval = $scope.userObj.pathways[0].stages[1].evaluations;
                //Decides where switches should be when page loads
                if ($scope.userObj.is_admin === true) {
                    $scope.is_admin = true;
                } else {
                    $scope.is_admin = false;
                };

                if ($scope.userObj.currently_active === true) {
                    $scope.is_active = true;
                } else {
                    $scope.is_active = false;
                }

                $scope.toggleAdminState = function (memberID) {
                    membersDetailService.toggleAdmin(memberID).then(function (response) {
                        return response;
                    });
                };

                $scope.toggleAccountState = function (memberID) {
                    membersDetailService.toggleAccount(memberID).then(function (response) {
                        return response;
                    });
                };

            });
    } ($scope.id));
});
