
'use strict';

angular.module('app')
.service('teamService', function($http, Auth, socket) {

  var that = this;
//Team functions
  //Gets user's team
 that.getTeam = function() {
    var userId = Auth.getCurrentUser()._id;
  // Auth.getCurrentUser().then(function(result) {

      console.log('users id is ' + userId + 'getTeam was called');
      return $http.get('/api/users/' + userId + '/team/');
    // });
  };

  //Gets all teams
  that.getAllTeams = function() {
    return $http.get('/api/teams');
  };
//Player functions
  that.addPlayer = function(player) {
    var userId = Auth.getCurrentUser()._id;
    // console.log('the playerid is ' + player._id);
    return $http.post('/api/users/' + userId + '/team/' + player._id);
  };



  that.removePlayer = function(player) {
    var userId = Auth.getCurrentUser()._id;
    console.log('deleted ' + player._id);
    return $http.delete('/api/users/' + userId + '/team/' + player._id);
  };

  that.getPoints = function(teamPlayer) {
    return teamPlayer.qty * teamPlayer.player.projPts;
  };

  that.getTotal = function(team) {
    var total = _.reduce(team, function(sum, teamPlayer) {
      return sum + that.getPoints(teamPlayer);
    }, 0);
    return total;
  };

  that.clearTeam = function() {
    var userId = Auth.getCurrentUser()._id;
    return $http.delete('/api/users/' + userId + '/team/');
  };
});
