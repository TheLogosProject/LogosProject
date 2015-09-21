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
                $scope.stageOptions = response;
                $scope.stages = true;
                $scope.stageID = "";
                $scope.onStageSelect = function () {
                    var stageSpecificIds = {
                        gymID: id1.gymID,
                        pathwayID: id1.pathwayID,
                        stageID: $scope.stageID
                    };
                    (function getStageEvals(id2) {
                        programmingLandingService.getEvals(id2).then(function (response) {
                            $scope.evaluationsList = response;
                            $scope.evaluations = true;
                            $scope.evalID = '';
                            $scope.onEvalSelect = function (id) {
                                var evalSpecificsId = {
                                    gymID: id2.gymID,
                                    pathwayID: id2.pathwayID,
                                    stageID: id2.stageID,
                                    evalID: id
                                };
                                (function getEvalInfo(id3) {
                                    programmingLandingService.getEvalDetails(id3).then(function (response) {
                                        $scope.evaluationSpecifics = response;
                                        $scope.evaluations = false;
                                        $scope.editEvaluation = true;
                                    });
                                }(evalSpecificsId));
                            };
                        });
                    }(stageSpecificIds));
                };
            });
        } (pathwaySpecificIds));
    };



});
