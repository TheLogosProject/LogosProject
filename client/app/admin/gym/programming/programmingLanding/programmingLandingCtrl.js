app.controller('programmingLandingCtrl', function ($scope, programmingLandingService, $location, gymObj) {

    var pathwaysArr = [];
    for (var i = 0; i < gymObj.pathways.length; i++) {
        var pathwayInfo = {
            label: gymObj.pathways[i]["name"],
            value: gymObj.pathways[i]["_id"]
        };
        pathwaysArr.push(pathwayInfo);
    }
    $scope.pathwayOptions = pathwaysArr;

    console.log($scope.pathwayOptions);



});
