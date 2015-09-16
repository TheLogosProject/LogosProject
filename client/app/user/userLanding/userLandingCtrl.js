app.controller('userLandingCtrl', function ($scope, $stateParams, userService) {

    var id = $stateParams.id;

    function getUser(id) {
        userService.getUserByID(id).then(function (response) {
            $scope.user = response;
        });
    };
    getUser(); //For testing. Remove later. Will be called with trigger of some sort, or on page load.
});