'use strict';

angular.module('app')
.config(function ($stateProvider) {
  $stateProvider
  .state('playerDetail', {
      url: '/players/:playerId',
      templateUrl: 'app/players/playerDetail/playerDetail.html',
      controller: 'PlayerDetailCtrl as ctrl'
    });
});
