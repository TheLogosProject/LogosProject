app.controller('gymLandingCtrl', function ($scope, gymLandingService) {
    $scope.getGym = function () {
        gymLandingService.getGym().then(function(response) {
          for (var i = 0; i < response.length; i++) {
            if (response[i]["active"] === true) {
              response[i]["active"] = "Yes";
            } else {
              response[i]["active"] = "No";
            };
          }

          $scope.gymInfo = response;
        });
    };

    $scope.getGym();

});
