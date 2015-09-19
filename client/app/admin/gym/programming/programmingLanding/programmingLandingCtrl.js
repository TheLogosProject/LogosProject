app.controller('programmingLandingCtrl', function ($scope, programmingLandingService, $location, pathways) {
    $scope.addGym = function (gymInfo) {
        gymCreateService.createGym(gymInfo).then(function (response) {
            $scope.gym.name = '';
            $location.path('/gym/main');
            Materialize.toast('Gym added successfully', 5000);
        }, function (err) {
          Materialize.toast('There was error.  Please try again.', 3000);
        });
    };

    $scope.gymPathways = pathways;

    console.log($scope.gymPathways);
});
