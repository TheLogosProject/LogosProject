(function () {
  'use strict';

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
                              $scope.onEvalSelect = function (ID) {
                                  var evalSpecificsId = {
                                      gymID: id2.gymID,
                                      pathwayID: id2.pathwayID,
                                      stageID: id2.stageID,
                                      evalID: ID
                                  };
                                  (function getEvalInfo(id3) {
                                      programmingLandingService.getEvalDetails(id3).then(function (response) {
                                          $scope.evaluationSpecifics = response;
                                          $scope.evaluations = false;
                                          $scope.editView = true;
                                          $scope.editEval = function () {

                                          };
                                          $scope.addEval = function () {
                                              $scope.addView = true;
                                              $scope.evaluations = false;
                                              var newEvalObj = {
                                                  gymID: id3.gymID,
                                                  pathwayID: id3.pathwayID,
                                                  stageID: id3.stageID,
                                                  name: "",
                                                  description: "",
                                                  videoURL: ""
                                              };
                                              (function addEvaluation(evalObj) {
                                                  programmingLandingService.addEvalObj(evalObj).then(function (response) {
                                                      return response;
                                                  });
                                              } (newEvalObj));
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
  
}());
