// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
      .otherwise('/home');

});
