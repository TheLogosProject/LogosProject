app.controller('gymDetailCtrl', function ($scope, gymDetailService, $stateParams) {
    var gymId = $stateParams.gymId;
    $scope.getGym = function (gymId) {
        gymDetailService.getGym(gymId).then(function(response) {  
          $scope.gym = {
            name: response.name,
            _id: response._id,
            address: response.address,
            contact_info: response.contact_info,
            gym_details: response.gym_details
          };
          $scope.updateGym = function(gym) {
            console.log(gym);
          };
        });
    };
    $scope.getGym();
});
