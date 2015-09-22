'use strict';

angular.module('app')
.controller('DraftCtrl', function ($state, playerService, teamService, socket, Auth) {
  var that = this;

  that.total = 0;
  that.timerSeconds;

  that.isAdmin = Auth.isAdmin;
  //Janky timer stuff
  that.startTimer = function() {
    //limit to admin only and make sure that the time is not less than 0
    if (Auth.isAdmin() && that.userCountdown > 0) {
      // socket.emit('countdown', {time: userCountdown});
      socket.emit('start', {time: that.userCountdown});
      //hide the button after it starts so no double timers!
      that.hidebutton = true;
    }
    else {
      console.log('Sorry, you are not Admin or the time you entered isnt greater than 0!!!');
    }
  };

  //this is listening and updating countdown timer in HTML
  socket.on('timer', function (data) {
    console.log(data.countdown);
    that.timerSeconds = data.countdown;
    });

  that.resetTimer = function() {
    console.log(that.timerSeconds + ' is that.timerSeconds');
    if (Auth.isAdmin()) {
      // socket.emit('countdown', userCountdown);
      socket.emit('reset');
      that.hidebutton = false;
    }
    else {
      console.log('Sorry, you are not Admin or the time has !!!!!!!');
    }
  };


//Fetch all players from server:
  that.getRoster = function() {
    playerService.getPlayers().then(function(json) {
      that.roster = json.data;
      socket.syncUpdates('player', that.roster);
    });
  };

  that.goPlayer = function (player) {
    $state.go( 'playerDetail', { playerId : player._id } );
  };

  that.getRoster();

//Get a users team
//TODO: implement this and make it only for signed in users

that.getUserTeam = function(){
    teamService.getTeam().then(function(json) {
      that.userTeam = json.data; }).then(function() {
        that.totalPts = 0;
        for(var i = 0; i < that.userTeam.length; i++) {
        that.totalPts += that.userTeam[i].projPts;
        console.log(that.userTeam[i].projPts);
        console.log(that.totalPts);
        }
        console.log(that.totalPts);
    });
};

that.getAllTeams = function() {
  teamService.getAllTeams().then(function(json) {
    that.allTeams = json.data;}).then(function() {
      socket.syncUpdates('team', that.allTeams);
     that.qbCount = 0;
        for(var i = 0; i < that.allTeams.length; i++) {

          if(that.allTeams[i].position)

        that.totalPts += that.userTeam[i].projPts;
        console.log(that.userTeam[i].projPts);
        console.log(that.totalPts);
        }
        console.log(that.totalPts);
    //TODO: validation here

  });

};

// that.getTotal = function(){
//     teamService.getTeam().then(function(json) {
//       that.userTeam = json.data;
//   });
// }

that.getUserTeam();

that.getAllTeams();

  that.addPlayer = function(player) {
    teamService.addPlayer(player).then(function(json) {
      //TODO: Refactor this
      that.getUserTeam();
      that.getAllTeams();
      that.getRoster();
      console.log(that.team);
    }, function(err) {
      console.log('ERROR: addPlayer post: ' + JSON.stringify(err));
    });
  };


  that.removePlayer = function(player) {
    teamService.removePlayer(player).then(function(json) {
      console.log('the player removed is' + player._id + 'from team: ' + that.userTeam);
      that.userTeam = json.data;
      that.getUserTeam();
      that.getAllTeams();
      // console.log('the player removed is' + player._id + 'from team: ' + that.userTeam);
      // socket.syncUpdates('player', that.allTeams);
      // that.total = teamService.getTotal(that.team);
    }, function(err) {
      console.log('ERROR: removePlayer delete: ' + JSON.stingify(err));
    });
  };

  // that.getPoints = function(player) {
  //   return teamService.getPoints(player);
  // };

  // that.clearTeam = function() {
  //   return teamService.clearTeam().then(function(json) {
  //     that.team = json.data;
  //     that.total = teamService.getTotal(that.team);
  //   }, function(err) {
  //     console.log('clearTeam delete ERROR: ' + JSON.stingify(err));
  //   });
  // };


});
