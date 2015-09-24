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
                            //ADD EVALUATION
                            $scope.addEval = function () {
                                $scope.addView = true;
                                $scope.evaluations = false;
                                $scope.addEvaluation = function (evalObj) {
                                    evalObj.gymID = id2.gymID;
                                    evalObj.pathwayID = id2.pathwayID;
                                    evalObj.stageID = id2.stageID;
                                    programmingLandingService.addEvalObj(evalObj).then(function (response) {
                                        $scope.addView = false;
                                        $scope.evaluations = true;
                                        getStageEvals(id2);
                                    });
                                };
                            };
                            //EDIT EVALUATION
                            $scope.onEvalSelect = function (ID) {
                                var evalSpecificsId = {
                                    gymID: id2.gymID,
                                    pathwayID: id2.pathwayID,
                                    stageID: id2.stageID,
                                    evalID: ID
                                };
                                (function getEvalInfo(id3) {
                                    programmingLandingService.getEvalDetails(id3).then(function (response) {
                                        $scope.evaluationObj = response;
                                        $scope.evaluations = false;
                                        $scope.editView = true;
                                        $scope.editEval = function (editedEval) {
                                            editedEval.gymID = id3.gymID;
                                            editedEval.pathwayID = id3.pathwayID;
                                            editedEval.stageID = id3.stageID;
                                            editedEval.evalID = id3.evalID;
                                            editedEval.description = editedEval.content.explanation;
                                            editedEval.video = editedEval.content.video;
                                            programmingLandingService.editEvaluation(editedEval).then(function (response) {
                                                $scope.editView = false;
                                                $scope.evaluations = true;
                                                getStageEvals(id2);
                                            });

                                        };
                                    });
                                } (evalSpecificsId));
                            };
                        });
                    } (stageSpecificIds));
                };
            });
        } (pathwaySpecificIds));
    };

    $scope.cancel = function () {
        $scope.evaluations = true;
        $scope.editView = false;
        $scope.addView = false;
    };
});
