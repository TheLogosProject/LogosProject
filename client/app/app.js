// app.js
var app = angular.module('app', [
  'ui.router'
  // 'ngCookies'
]);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
      .otherwise('/home');

});
