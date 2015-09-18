app.controller('gymCreateCtrl', function ($scope, gymCreateService) {
    $scope.addGym = function (gymInfo) {
        gymCreateService.createGym(gymInfo).then(function (response) {
            return response;
        });
    };
});
