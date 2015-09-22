'use strict';

var _ = require('lodash');
var Team = require('./team.model');
var Player = require('../player/player.model');
var User = require('../user/user.model');

//Create a team

exports.create = function(req, res) {
  Team.create(req.body, function(err, team) {
    if(err) { return handleError(res, err);}
    return res.json(201, team);
  });
};

// Get the User's team from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);
//New function

User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }
      var teamId = user.team;

      Team.findById(teamId).populate("players").exec(function(err, team) {
        if (err) { return handleError(res, err); }
        if (!team) { return res.send(404); }
        console.log('returning team: ' + JSON.stringify(team.players));
        res.json(200, team.players);

      });//end team.findbyid
    });//end user.findbyid
};//end of export.get function




//Get a league's(all) teams from DB
exports.index = function(req, res) {
  Team.find().populate("players").exec(function(err, teams){
    if(err) { return handleError(res, err); }
    console.log(teams);
    return res.json(200, teams);
  });
};

// Add a new player to the team or update the qty and return the team.
exports.addPlayer = function(req, res) {
  // console.log('addPlayer, url = ' + req.url);
  // console.log('userid is' + req.params.userid + 'playerid is: ' + req.params.playerid);
  var userId = req.params.userid.trim();
  var playerId = req.params.playerid.trim();


  Player.findById(playerId, function(err, player) {
    if (err) { return handleError(res, err); }
    if (!player) { return res.send(404); }

    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }
      //grab teamId here b/c can't get it from the URL
      var teamId = user.team;

      // console.log(teamId);
      // console.log('userId: ' + userId + ', playerId: ' + playerId);
      Team.findById(teamId).populate("players").exec(function(err, team) {
        if (err) { return handleError(res, err); }
        if (!team) { return res.send(404); }

  // TODO: probably delete this function and the findPlayerInTeam
      // Check if player is already in team ===== Why would we use this?
      // var found = findPlayerInTeam(user, player._id);
      // if (found) {
      //   console.log('Found player ' + player.name + ' in team, therefore incrementing qty');
      //   found.qty = found.qty + 1;
      // }
      // else {
        //push player reference into that teams players array in DB
        team.players.push(player);
        //change status in DB so he is hidden/unavaliable from DOM
        player.selected = true;
        console.log(player + 'is player found and selected is changed to true');
        player.save(function(){
          console.log(player + 'was saved');
        });

        team.save(function() {
            console.log('the player saved is' + player);
            return res.json(201, player );
        });
     }); //end team.findbyid
    });//end user.findbyid

  });//end player.findbyid

};

// Remove an player from the team and return the team.
exports.removePlayer = function(req, res) {
  console.log('removePlayer, url = ' + req.url);
  // console.log('userid is' + req.params.userid + 'playerid is: ' + req.params.playerid);
  var userId = req.params.userid.trim();
  var playerId = req.params.playerid.trim();


  Player.findById(playerId, function(err, player) {
    if (err) { return handleError(res, err); }
    if (!player) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }
      //grab teamId here b/c can't get it from the URL
      var teamId = user.team;

      // console.log(teamId);
      // console.log('userId: ' + userId + ', playerId: ' + playerId);

      Team.findById(teamId).populate("players").exec(function(err, team) {
        if (err) { return handleError(res, err); }
        if (!team) { return res.send(404); }

        //change players status to selected in DB so he will be unhidden and available in the Dom
        player.selected = false;
        console.log(player + 'is player found and selected is changed to true');
        player.save(function(){
          console.log(player + 'was saved');
        });


        team.players.remove(playerId);

        team.save(function() {
            console.log('the player removed is' + player + 'and team was saved. thanks!!!!');
            return res.json(201, team );
        });
     }); //end team.findbyid
    });//end user.findbyid

  });//end player.findbyid

};

//Name a users team
exports.nameTeam = function (req, res) {
  var userId = req.params.userid.trim();
  console.log(req.body.name);
  var teamName = req.body.name;
  User.findById(userId).populate("team").exec(function(err, user) {
        if (err) { return handleError(res, err); }
        if (!teamName) { return res.send(404); }
  user.team.name = teamName;
  user.team.save(function() {
            console.log('the new team name is ' + teamName);
            return res.json(201, user.team );
        });

  });
}

//=============Old Function/////////////===============
// exports.removePlayer = function(req, res) {
//   console.log('removePlayer, url = ' + req.url);
//   var userId = req.params.userid;
//   var teamPlayerId = req.params.playerid;
//   console.log('userId: ' + userId + ', teamPlayerId: ' + teamPlayerId);

//   // Remove the player, get the updated team, and return the team
//   User.findById(userId, function(err, user) {
//     if (err) { return handleError(res, err); }
//     if (!user) { return res.send(404); }

//     // Check if player is already in team
//     // var found = findPlayerInCart(user, teamPlayerId);
//     // if (found) {
//     //   console.log('Removing player from team');
//     //   user.team.pull(found._id);               // pull is a feature of MongooseArray!
//     // }
//     // else {
//     //   return res.send(404);
//     // }
//     user.save(function() {
//       user.populate('team.player', function(err, user) {
//         return res.json(201, user.team );
//       });
//     });
//   });
// };

// Remove all players from the team in the DB.
exports.removeAllPlayers = function(req, res) {
  console.log('removeAllPlayers, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all players from team and return the team
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.team = [];
    user.save(function() {
      user.populate('team.player', function(err, user) {
        return res.send(204, user.team);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
