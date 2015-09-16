app.controller('userLandingCtrl', function ($scope, $stateParams, userService) {

    var id = $stateParams.id;

    function getUser() { //***Insert ID as argument
        userService.getUserByID().then(function (response) {
            $scope.user = response;
        });
    };
    getUser(); //For testing, will be called with trigger of some sort.


});