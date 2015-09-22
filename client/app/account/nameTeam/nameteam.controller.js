'use strict';

angular.module('app')
  .controller('NameTeamCtrl', function ($scope, Auth, $location, $window, $http) {

   var that = this;
   that.nameTeamService = function (form) {
      var userId = Auth.getCurrentUser()._id;
      return $http.patch('/api/users/' + userId + '/team/', {name: that.team.name});
    };

    that.nameTeam = function() {
      that.nameTeamService().then(function(json) {
        that.teamName = json.data;
          // Account created, redirect to players screen.
          $location.path('/players');
      });
    };
});
