'use strict';

angular.module('app')
.filter('playerFilter', function () {



  function isMatch(str, pattern) {
    return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
  }

  return function(roster, searchText) {
    var players = {
        searchText: searchText,
        out: []
    };
    angular.forEach(roster, function (player) {
      if (isMatch(player.team   , this.searchText) ||
          isMatch(player.name       , this.searchText) ||
          isMatch(player.bye       , this.searchText) ) {
        this.out.push(player);
      }
    }, players);
    return players.out;
  };

  // function isMatch(str, pattern) {
  //   return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
  // }

  // return function(roster, searchText) {
  //   var players = {
  //       searchText: searchText,
  //       out: []
  //   };
  //   angular.forEach(roster, function (player) {
  //     if(isMatch(player.position,   this.searchText) ||
  //       isMatch(player.name,        this.searchText) ||
  //       isMatch(player.bye,         this.searchText) ) {
  //       this.out.push(player);
  //     }
  //   }, players);
  //   return players.out;
  // };
});
