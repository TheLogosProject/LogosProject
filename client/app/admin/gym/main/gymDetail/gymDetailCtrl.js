app.controller('gymDetailCtrl', function ($scope, gymDetailService, $routeParams) {
    var gymId = $routeParams.gymId
    $scope.getGym = function (gymId) {
        gymDetailService.getGym(gymId).then(function(response) {
          $scope.gymInfo = response.data;
        });
    };
    
});
