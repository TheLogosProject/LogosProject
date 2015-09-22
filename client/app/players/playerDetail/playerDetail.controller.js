'use strict';

angular.module('app')
.controller('PlayerDetailCtrl', function($stateParams, playerService) {

  var that = this;

  var id = $stateParams.playerId;

  playerService.findPlayerById(id).then(function(json) {
    that.player = json.data;
});
});
