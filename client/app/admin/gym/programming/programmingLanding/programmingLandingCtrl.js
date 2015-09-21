app.controller('programmingLandingCtrl', function ($scope, programmingLandingService, gymObj) {

    var pathwaysArr = [];
    for (var i = 0; i < gymObj.pathways.length; i++) {
        var pathwayInfo = {
            label: gymObj.pathways[i]["name"],
            value: gymObj.pathways[i]["_id"]
        };
        pathwaysArr.push(pathwayInfo);
    }
    $scope.pathwayOptions = pathwaysArr;
    $scope.pathwayID = "";

    $scope.onPathwaySelect = function () {
        var pathwaySpecificIds = {
            gymID: gymObj._id,
            pathwayID: $scope.pathwayID
        };
        (function getPathwayStages(id1) {
            programmingLandingService.getStages(id1).then(function (response) {
                $scope.stages = true;
                $scope.stageOptions = response;
                $scope.stageID = "";
                $scope.onStageSelect = function () {
                    var stageSpecificIds = {
                        gymID: id1.gymID,
                        pathwayID: id1.pathwayID,
                        stageID: $scope.stageID
                    };
                    (function getStageEvals(id2) {
                        programmingLandingService.getEvals(id2).then(function (response) {
                            $scope.evaluations = true;
                            $scope.evaluationsList = response;
                            console.log($scope.evaluationsList);
                        });
                    }(stageSpecificIds));
                };
            });
        } (pathwaySpecificIds));
    };



});
