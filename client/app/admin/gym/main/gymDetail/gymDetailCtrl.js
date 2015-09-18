app.controller('gymDetailCtrl', function ($scope, $location, gymDetailService, $stateParams) {
    var gymId = $stateParams.gymId;
    $scope.getGym = function (gymId) {
        gymDetailService.getGym(gymId).then(function (response) {
            $scope.gym = {
                name: response.name,
                _id: response._id,
                address: response.address,
                contact_info: response.contact_info,
                gym_details: response.gym_details
            };
            $scope.updateGymInfo = function (gym) {
                gymDetailService.updateGym(gym).then(function (response) {
                    $location.path('/gym/main');
                    Materialize.toast('Gym updated successfully', 5000);
                }, function (err) {
                    Materialize.toast('There was error.  Please try again.', 3000);
                });
            };
        });
    };
    $scope.getGym(gymId);
});
