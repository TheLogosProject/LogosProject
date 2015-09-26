(function () {
  'use strict';

app.controller('gymLandingCtrl', function ($scope, gymLandingService) {
    $scope.getGym = function () {
        gymLandingService.getGym().then(function(response) {
          for (var i = 0; i < response.length; i++) {
            if (response[i]["currently_active"] === true) {
              response[i]["currently_active"] = "Yes";
            } else {
              response[i]["currently_active"] = "No";
            }
          }
          $scope.gymInfo = response;
        });
    };

    $scope.getGym();

});

}());
