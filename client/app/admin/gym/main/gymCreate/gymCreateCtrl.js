app.controller('gymCreateCtrl', function ($scope, gymCreateService, $location) {
    $scope.addGym = function (gymInfo) {
        gymCreateService.createGym(gymInfo).then(function (response) {
            $scope.gym.name = '';
            Materialize.toast('Gym added successfully', 3000);
        }, function (err) {
          Materialize.toast('There was error.  Please try again.', 3000);
        });
    };
});
